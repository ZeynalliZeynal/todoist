'use client';

import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Checkbox } from '@/components/ui/primitives/checkbox';
import CopyBlock from '@/components/copy-block';
import { button_link_code } from '@/app/(geist)/geist/button/_snippets/snippets';
import CodeSnippet from '@/components/ui/code-snippet';
import React from 'react';

export default function CheckboxDefault() {
  const [checked, setChecked] = React.useState(false);

  return (
    <section className="p-12">
      <ScrollToLink id="default" href="#default">
        <h2>Default</h2>
      </ScrollToLink>
      <Collapse className="mt-7">
        <div className="flex items-center justify-between p-6 bg-background-100">
          <Checkbox
            checked={checked}
            onChange={() => setChecked((prevState) => !prevState)}
          >
            Option
          </Checkbox>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CopyBlock text={button_link_code}>
            <CodeSnippet showLineNumbers>{button_link_code}</CodeSnippet>
          </CopyBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
