'use client';

import CopyBlock from '@/components/copy-block';
import { LogoFull, LogoFullInvert } from '@/components/ui/icons/logo';
import { renderToString } from 'react-dom/server';

export default function TodoistBrand() {
  return (
    <section className="flex flex-col">
      <CopyBlock
        size="md"
        text={renderToString(<LogoFullInvert />)}
        className="px-12 py-28 flex items-center justify-center bg-white"
      >
        <LogoFullInvert height={64} />
      </CopyBlock>
      <CopyBlock
        size="md"
        text={renderToString(<LogoFull />)}
        className="px-12 py-28 flex items-center justify-center bg-background-200"
      >
        <LogoFull height={64} />
      </CopyBlock>
    </section>
  );
}
