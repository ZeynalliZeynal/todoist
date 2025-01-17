'use client';

import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Checkbox } from '@/components/ui/primitives/checkbox';
import CodeBlock from '@/components/ui/code-block';
import React from 'react';
import { checkbox_default } from '@/app/(geist)/geist/checkbox/_snippets/snippets';

export default function CheckboxDefault() {
  const [checked, setChecked] = React.useState(false);

  return (
    <section className="p-12">
      <ScrollToLink id="disabled" href="#disabled">
        <h2>Disabled</h2>
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
          <CodeBlock showLineNumbers>{checkbox_default}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
