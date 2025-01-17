import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Checkbox } from '@/components/ui/primitives/checkbox';
import CodeBlock from '@/components/ui/code-block';
import React from 'react';
import { checkbox_disabled } from '@/app/(geist)/geist/checkbox/_snippets/snippets';

export default function CheckboxDisabled() {
  return (
    <section className="p-12">
      <ScrollToLink id="default" href="#default">
        <h2>Default</h2>
      </ScrollToLink>
      <Collapse className="mt-7">
        <div className="flex flex-col gap-2 justify-between p-6 bg-background-100">
          <Checkbox disabled checked={false}>
            Disabled
          </Checkbox>
          <Checkbox disabled checked={true}>
            Disabled & checked
          </Checkbox>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{checkbox_disabled}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
