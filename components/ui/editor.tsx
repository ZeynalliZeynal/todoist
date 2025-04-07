'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import React, { ReactNode } from 'react';
import { LuUnderline } from 'react-icons/lu';
import {
  Image,
  TextBold,
  TextItalic,
  TextStrikethrough,
} from 'vercel-geist-icons';
import Kbd from './kbd';

// extensions
import { TiptapExtensions } from '@/lib/tiptap';
import { uploadFile } from '@/actions/storage.action';
import { toast } from 'sonner';
import { Level } from '@tiptap/extension-heading';

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
            className,
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

export function EditorToolbarSeparator({
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-1 w-px h-6 bg-gray-400 shrink-0', props.className)}
      {...props}
    />
  );
}

type MarkType = 'bold' | 'italic' | 'underline' | 'strike';
interface EditorToolbarProps extends React.ComponentProps<'div'> {
  editor: Editor;
  features?: {
    heading?: Level;
    mark?: MarkType[];
    insert?: {
      image?: boolean;
      link?: boolean;
    };
    counter?: {
      character?: boolean;
      word?: boolean;
    };
  };
}
export function EditorToolbar({
  children,
  editor,
  className,
  features,
  ...props
}: EditorToolbarProps) {
  if (!editor) {
    return null;
  }
  if (!editor) return null;

  const markButtons: Record<MarkType, { icon: ReactNode; shortcut: string }> = {
    bold: { icon: <TextBold />, shortcut: '⌘ + B' },
    italic: { icon: <TextItalic />, shortcut: '⌘ + I' },
    underline: { icon: <LuUnderline />, shortcut: '⌘ + U' },
    strike: { icon: <TextStrikethrough />, shortcut: '⌘ + ⇧ + S' },
  };

  const renderMarkButtons = () => (
    <>
      {features?.mark?.map((mark) => {
        const { icon, shortcut } = markButtons[mark];
        return (
          <EditorToggleButton
            key={mark}
            tooltip={
              <>
                Toggle {mark} <Kbd>{shortcut}</Kbd>
              </>
            }
            toggled={editor.isActive(mark)}
            onClick={() => editor.chain().toggleMark(mark).focus().run()}
          >
            {icon}
          </EditorToggleButton>
        );
      })}
      <EditorToolbarSeparator />
    </>
  );

  const renderHeadingButtons = () =>
    features?.heading ? (
      <>
        {Array.from({ length: features.heading }, () => {
          const level = features.heading as Level;
          return (
            <EditorToggleButton
              key={`heading-${level}`}
              tooltip={
                <>
                  Heading {level} <Kbd>{'#'.repeat(level)}</Kbd>
                </>
              }
              toggled={editor.isActive('heading', { level })}
              onClick={() =>
                editor.chain().toggleHeading({ level }).focus().run()
              }
            >
              H{level}
            </EditorToggleButton>
          );
        })}
        <EditorToolbarSeparator />
      </>
    ) : null;

  return (
    <div
      className={cn(
        'overflow-x-auto gap-1 flex items-center bg-background-200',
        className,
      )}
      style={{
        scrollbarWidth: 'none',
        ...props.style,
      }}
      {...props}
    >
      {renderHeadingButtons()}
      {renderMarkButtons()}
      {features?.insert && (
        <div className="flex items-center gap-1">
          {features?.insert?.image && (
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
                          res?.data?.fileUrl.indexOf('?'),
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
          )}
          <EditorToolbarSeparator />
        </div>
      )}
      {children}
      <div className="flex items-center gap-1 ml-auto">
        {features?.counter && features.counter.character && (
          <Tooltip>
            <TooltipTrigger className="center text-gray-900 size-10 cursor-default">
              {editor.storage.characterCount.characters()}
            </TooltipTrigger>
            <TooltipContent>Character count</TooltipContent>
          </Tooltip>
        )}
        {features?.counter && features.counter.word && (
          <Tooltip>
            <TooltipTrigger className="center text-gray-900 size-10 cursor-default">
              {editor.storage.characterCount.words()}
            </TooltipTrigger>
            <TooltipContent>Word count</TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export function EditorContainer({
  children,
  content,
  onChange,
  features,
  toolbar,
}: {
  children: ReactNode;
  content: string;
  onChange: (content: string) => void;
  features?: {
    heading?: Level;
    mark?: MarkType[];
  };
  toolbar?: typeof EditorToolbar;
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
      TiptapExtensions.CharacterCount,
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

        const imageItem = clipboardItems.find(
          (item) =>
            item.kind === 'file' && allowedImageTypes.includes(item.type),
        );

        if (imageItem) {
          void (async () => {
            try {
              const blob = imageItem.getAsFile();
              if (!blob) return;

              const extension = imageItem.type.split('/')[1];
              const file = new File([blob], `image.${extension}`, {
                type: imageItem.type,
              });

              const formData = new FormData();
              formData.append('file', file);

              try {
                const res = await uploadFile({ file, prefix: 'feedbacks' });
                if (res?.status === 'success') {
                  view.dispatch(
                    view.state.tr.replaceSelectionWith(
                      view.state.schema.nodes.image.create({
                        src: res.data.fileUrl,
                      }),
                    ),
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
          return true;
        }

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
        {React.isValidElement(toolbar) ? (
          React.cloneElement(toolbar, {
            editor,
          } as React.ComponentProps<typeof EditorToolbar>)
        ) : (
          <EditorToolbar
            editor={editor}
            features={
              features || {
                mark: ['bold', 'italic', 'underline', 'strike'],
                counter: { character: true },
                insert: {
                  image: true,
                },
              }
            }
            className="border-b sticky top-0 z-50"
          >
            {children}
          </EditorToolbar>
        )}
        <EditorContent
          editor={editor}
          className={cn(
            'size-full p-3',
            '[&_.tiptap]:size-full [&_.tiptap]:outline-none',
          )}
        />
      </div>
    </TooltipProvider>
  );
}

export function extractTextFromHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}
