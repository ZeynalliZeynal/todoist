import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import CodeBlock from '@/components/ui/code-block';
import { button_disabled_code } from '@/app/(geist)/geist/button/_snippets/snippets';
import { ButtonLink } from '@/components/ui/button';
import GeistContentWrapper from '@/app/(geist)/geist/_components/geist-content-wrapper';

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
        <GeistContentWrapper>
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
        </GeistContentWrapper>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{button_disabled_code}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
