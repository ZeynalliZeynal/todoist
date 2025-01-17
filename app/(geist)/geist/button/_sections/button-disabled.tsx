import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Button } from '@/components/ui/button';
import CopyBlock from '@/components/copy-block';
import CodeBlock from '@/components/ui/code-block';
import { button_link_code } from '@/app/(geist)/geist/button/_snippets/snippets';
import Spinner from '@/components/ui/spinner';

export default function ButtonDisabled() {
  return (
    <section className="p-12">
      <ScrollToLink id="disabled" href="#disabled">
        <h2>Disabled</h2>
      </ScrollToLink>
      <Collapse className="mt-7">
        <div className="flex items-center justify-between p-6 bg-background-100">
          <Button disabled prefix={<Spinner />} size="sm">
            Uploading
          </Button>
          <Button disabled prefix={<Spinner />} size="md">
            Uploading
          </Button>
          <Button disabled prefix={<Spinner />} size="lg">
            Uploading
          </Button>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CopyBlock text={button_link_code}>
            <CodeBlock showLineNumbers>{button_link_code}</CodeBlock>
          </CopyBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
