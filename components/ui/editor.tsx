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
import {
  Code,
  CodeBlock,
  Command,
  Shift,
  TextBold,
  TextItalic,
  TextStrikethrough,
} from 'vercel-geist-icons';

// extensions
import { Image } from '@tiptap/extension-image';
import { Link as LinkExtension } from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { Underline } from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { LuUnderline } from 'react-icons/lu';
import Kbd from './kbd';

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
      StarterKit,
      Image,
      LinkExtension,
      Underline,
      Placeholder.configure({
        placeholder: 'Write down here...',
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const value = editor.getHTML();
      if (editor.getText() === '') onChange('');
      else onChange(value);
    },
    enableInputRules: true,
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
