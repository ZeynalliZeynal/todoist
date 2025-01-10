import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import CopyBlock from '@/components/copy-block';
import CodeSnippet from '@/components/ui/code-snippet';
import { button_disabled_code } from '@/app/(geist)/geist/button/_snippets/snippets';
import { ButtonLink } from '@/components/ui/button';

export default function ButtonLinkSection() {
  return (
    <section className="p-12">
      <ScrollToLink id="link" href="#link">
        <h2>Link</h2>
      </ScrollToLink>
      <p className="text-base text-gray-900 mt-4">
        Use <code>ButtonLink</code> for links with the same props as{' '}
        <code>Button</code>.
      </p>
      <Collapse className="mt-7">
        <div className="flex items-center justify-between p-6 bg-background-100">
          <ButtonLink href="#link" variant="primary">
            Dashboard
          </ButtonLink>
          <ButtonLink href="#link" variant="secondary">
            Dashboard
          </ButtonLink>
          <ButtonLink href="#link" variant="tertiary">
            Dashboard
          </ButtonLink>
          <ButtonLink href="#link" variant="ghost">
            Dashboard
          </ButtonLink>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CopyBlock text={button_disabled_code}>
            <CodeSnippet showLineNumbers>{button_disabled_code}</CodeSnippet>
          </CopyBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
