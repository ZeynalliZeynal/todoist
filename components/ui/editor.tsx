'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import { cn } from '@/lib/utils';
import {
  Code,
  CodeBlock,
  TextBold,
  TextItalic,
  TextStrikethrough,
} from 'vercel-geist-icons';
import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// extensions
import { Document } from '@tiptap/extension-document';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Bold } from '@tiptap/extension-bold';
import { Italic } from '@tiptap/extension-italic';
import { Strike } from '@tiptap/extension-strike';
import { Blockquote } from '@tiptap/extension-blockquote';
import { CodeBlock as CodeBlockExtension } from '@tiptap/extension-code-block';
import { Code as InlineCode } from '@tiptap/extension-code';
import { Image } from '@tiptap/extension-image';
import { Link as LinkExtension } from '@tiptap/extension-link';
import { Text } from '@tiptap/extension-text';

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
      {tooltip && <TooltipContent>{tooltip}</TooltipContent>}
    </Tooltip>
  );
}

export function Editor({
  content,
  onChange,
}: {
  content: string;
  onChange: (content: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      Text,
      Document,
      Paragraph,
      Bold,
      Italic,
      Strike,
      Blockquote,
      CodeBlockExtension,
      Image,
      InlineCode,
      LinkExtension,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const value = editor.getHTML();
      onChange(value);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <TooltipProvider>
      <div className="tiptap-container size-full">
        <div className="p-1 border-b text-xs flex items-center gap-1">
          <EditorToggleButton
            tooltip="Toggle bold"
            toggled={editor.isActive('bold')}
            onClick={() => editor.chain().toggleBold().focus().run()}
          >
            <TextBold />
          </EditorToggleButton>
          <EditorToggleButton
            tooltip="Toggle italic"
            toggled={editor.isActive('italic')}
            onClick={() => editor.chain().toggleItalic().focus().run()}
          >
            <TextItalic />
          </EditorToggleButton>
          <EditorToggleButton
            tooltip="Toggle strike through"
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
            '[&_.tiptap]:size-full [&_.tiptap]:outline-none',
          )}
        />
      </div>
    </TooltipProvider>
  );
}
