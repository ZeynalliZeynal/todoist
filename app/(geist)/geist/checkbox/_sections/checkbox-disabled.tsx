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
import GeistContentWrapper from '@/app/(geist)/geist/_components/geist-content-wrapper';

export default function CheckboxDisabled() {
  return (
    <section className="p-12">
      <ScrollToLink id="default" href="#default">
        <h2>Default</h2>
      </ScrollToLink>
      <Collapse className="mt-7">
        <GeistContentWrapper>
          <Checkbox disabled checked={false}>
            Disabled
          </Checkbox>
          <Checkbox disabled checked={true}>
            Disabled & checked
          </Checkbox>
        </GeistContentWrapper>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{checkbox_disabled}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
