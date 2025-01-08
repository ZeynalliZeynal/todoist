'use client';

import CopyBlock from '@/components/copy-block';
import { Nextjs, NextjsFull } from '@/components/ui/icons/geist';
import { LogoFull } from '@/components/ui/icons/logo';
import { renderToString } from 'react-dom/server';

export default function NextBrand() {
  return (
    <section className="flex flex-col">
      <CopyBlock
        size="md"
        text={renderToString(<Nextjs />)}
        className="px-12 py-28 text-background-200 flex items-center justify-center bg-white"
      >
        <NextjsFull height={64} />
      </CopyBlock>
      <CopyBlock
        size="md"
        text={renderToString(<LogoFull />)}
        className="px-12 py-28 flex items-center justify-center bg-background-200"
      >
        <NextjsFull height={64} />
      </CopyBlock>
    </section>
  );
}
