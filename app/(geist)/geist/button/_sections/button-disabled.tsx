import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/ui/code-block';
import { button_link_code } from '@/app/(geist)/geist/button/_snippets/snippets';
import Spinner from '@/components/ui/spinner';
import GeistContentWrapper from '@/app/(geist)/geist/_components/geist-content-wrapper';

export default function ButtonDisabled() {
  return (
    <section className="p-12">
      <ScrollToLink id="disabled" href="#disabled">
        <h2>Disabled</h2>
      </ScrollToLink>
      <Collapse className="mt-7">
        <GeistContentWrapper>
          <Button disabled prefix={<Spinner />} size="sm">
            Uploading
          </Button>
          <Button disabled prefix={<Spinner />} size="md">
            Uploading
          </Button>
          <Button disabled prefix={<Spinner />} size="lg">
            Uploading
          </Button>
        </GeistContentWrapper>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{button_link_code}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
