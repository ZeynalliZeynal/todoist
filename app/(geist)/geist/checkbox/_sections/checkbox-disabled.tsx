import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Checkbox } from '@/components/ui/primitives/checkbox';
import CopyBlock from '@/components/copy-block';
import CodeSnippet from '@/components/ui/code-snippet';
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
          <CopyBlock text={checkbox_disabled}>
            <CodeSnippet showLineNumbers>{checkbox_disabled}</CodeSnippet>
          </CopyBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
