'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { EditorContent, useEditor } from '@tiptap/react';
import React, { ReactNode } from 'react';
import { LuUnderline } from 'react-icons/lu';
import {
  Code,
  CodeBlock,
  Command,
  Shift,
  TextBold,
  TextItalic,
  TextStrikethrough,
  Image,
} from 'vercel-geist-icons';
import Kbd from './kbd';

// extensions
import { TiptapExtensions } from '@/lib/tiptap';
import { uploadFile } from '@/actions/storage.action';
import { toast } from 'sonner';

const allowedImageTypes = [
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/tiff',
  'image/webp',
  'image/x-icon',
  'text/html',
];

export function EditorToggleButton({
  className,
  toggled,
  tooltip,
  ...props
}: { toggled?: boolean; tooltip?: React.ReactNode } & React.ComponentProps<
  typeof Button
>) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          iconOnly
          variant="tertiary"
          className={cn(
            'text-gray-800 data-[hover]:text-foreground rounded',
            toggled && 'bg-gray-200',
            className
          )}
          {...props}
        />
      </TooltipTrigger>
      {tooltip && (
        <TooltipContent className="flex items-center gap-2">
          {tooltip}
        </TooltipContent>
      )}
    </Tooltip>
  );
}

export function Editor({
  children,
  content,
  onChange,
}: {
  children: ReactNode;
  content: string;
  onChange: (content: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      TiptapExtensions.StarterKit,
      TiptapExtensions.Link,
      TiptapExtensions.Underline,
      TiptapExtensions.Placeholder.configure({
        placeholder: 'Write down here...',
      }),
      TiptapExtensions.Image,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const value = editor.getHTML();
      if (editor.getText() === '') onChange('');
      else onChange(value);
    },
    enableInputRules: true,
    editorProps: {
      handlePaste(view, event) {
        const clipboardItems = event.clipboardData
          ? Array.from(event.clipboardData.items)
          : [];

        // Look for an image file in the pasted items
        const imageItem = clipboardItems.find(
          (item) =>
            item.kind === 'file' && allowedImageTypes.includes(item.type)
        );

        if (imageItem) {
          // We have an image file, so handle it asynchronously
          void (async () => {
            try {
              const blob = imageItem.getAsFile();
              if (!blob) return;

              const extension = imageItem.type.split('/')[1];
              const file = new File([blob], `image.${extension}`, {
                type: imageItem.type,
              });

              // Optionally, you can append to a FormData if needed by your uploadFile function
              const formData = new FormData();
              formData.append('file', file);

              try {
                const res = await uploadFile({ file, prefix: 'feedbacks' });
                if (res?.status === 'success') {
                  view.dispatch(
                    view.state.tr.replaceSelectionWith(
                      view.state.schema.nodes.image.create({
                        src: res.data.fileUrl,
                      })
                    )
                  );
                } else {
                  toast.error(res.message);
                  console.error(res);
                }
              } catch (uploadError) {
                console.error(uploadError);
              }
            } catch (e) {
              console.error('Error reading clipboard:', e);
            }
          })();
          // Return true to block default paste behavior when pasting an image
          return true;
        }

        // For non-image content (e.g. text), allow the default paste behavior
        return false;
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <TooltipProvider disableHoverableContent>
      <div className="tiptap-container size-full">
        <div className="p-1 border-b text-xs flex items-center gap-1">
          <EditorToggleButton
            tooltip={
              <>
                Toggle bold{' '}
                <Kbd>
                  <Command />
                  +B
                </Kbd>
              </>
            }
            toggled={editor.isActive('bold')}
            onClick={() => editor.chain().toggleBold().focus().run()}
          >
            <TextBold />
          </EditorToggleButton>
          <EditorToggleButton
            tooltip={
              <>
                Toggle italic{' '}
                <Kbd>
                  <Command />
                  +I
                </Kbd>
              </>
            }
            toggled={editor.isActive('italic')}
            onClick={() => editor.chain().toggleItalic().focus().run()}
          >
            <TextItalic />
          </EditorToggleButton>
          <EditorToggleButton
            tooltip={
              <>
                Toggle underline{' '}
                <Kbd>
                  <Command />
                  +U
                </Kbd>
              </>
            }
            toggled={editor.isActive('underline')}
            onClick={() => editor.chain().toggleUnderline().focus().run()}
          >
            <LuUnderline />
          </EditorToggleButton>
          <EditorToggleButton
            tooltip={
              <>
                Toggle strike through{' '}
                <Kbd>
                  <Command />+<Shift />
                  +S
                </Kbd>
              </>
            }
            toggled={editor.isActive('strike')}
            onClick={() => editor.chain().toggleStrike().focus().run()}
          >
            <TextStrikethrough />
          </EditorToggleButton>
          <div className="mx-1 w-px h-6 bg-gray-400" />
          <EditorToggleButton
            tooltip="Toggle inline code"
            toggled={editor.isActive('code')}
            onClick={() => editor.chain().toggleCode().focus().run()}
          >
            <Code />
          </EditorToggleButton>
          <EditorToggleButton
            tooltip="Toggle code block"
            toggled={editor?.isActive('codeBlock')}
            onClick={() => editor?.chain().toggleCodeBlock().focus().run()}
          >
            <CodeBlock />
          </EditorToggleButton>
          <div className="mx-1 w-px h-6 bg-gray-400" />
          <EditorToggleButton
            tooltip="Insert image"
            toggled={editor?.isActive('image')}
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/*';

              input.onchange = async () => {
                const file = input.files?.[0];
                if (!file) return;

                const res = await uploadFile({ file, prefix: 'feedbacks' });

                if (res?.status === 'success') {
                  editor
                    .chain()
                    .focus()
                    .setImage({
                      src: res?.data?.fileUrl.substring(
                        0,
                        res?.data?.fileUrl.indexOf('?')
                      ),
                    })
                    .run();
                } else {
                  toast.error(res.message);
                  console.error('Upload failed:', res);
                }
              };

              input.click();
            }}
          >
            <Image />
          </EditorToggleButton>
          <div className="mx-1 w-px h-6 bg-gray-400" />
          {children}
          {/*<EditorToggleButton*/}
          {/*  tooltip="Insert link"*/}
          {/*  toggled={editor.isActive('link')}*/}
          {/*  onClick={() =>*/}
          {/*    editor.chain().toggleLink({ href: '' }).focus().run()*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Link />*/}
          {/*</EditorToggleButton>*/}
        </div>
        <EditorContent
          editor={editor}
          className={cn(
            'size-full p-3',
            '[&_.tiptap]:size-full [&_.tiptap]:outline-none'
          )}
        />
      </div>
    </TooltipProvider>
  );
}

export function extractTextFromHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}
