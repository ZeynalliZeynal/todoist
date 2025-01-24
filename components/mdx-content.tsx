'use client';

import { useEffect, useState } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Button } from '@everest-ui/react-button';

export default function MDXContent({ code }: { code: string }) {
  const [content, setContent] = useState<React.ReactNode | null>(null)

  useEffect(() => {
    async function loadContent() {
      const { default: ReactDOMServer } = await import("react-dom/server")
      const mdxContent = await serialize(code)
      const rendered = ReactDOMServer.renderToString(<MDXRemote {...mdxContent} components={{ Button }} />)
      setContent(<div dangerouslySetInnerHTML={{ __html: rendered }} />)
    }
    loadContent()
  }, [code])

  return content
}
