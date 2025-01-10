import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import CopyBlock from '@/components/copy-block';
import CodeBlock from '@/components/ui/code-block';
import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import { Stack } from '@/components/ui/stack';

export default function ButtonPage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Button</h1>
        <p className="text-gray-900">
          A label that emphasizes an element that requires attention, or helps
          categorize with other similar elements.
        </p>
      </section>
      <section className="p-12">
        <ScrollToLink id="variants" href="#variants">
          <h2>Variants</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <Stack gap={2} padding={6} className="bg-background-100"></Stack>
          <CollapseTrigger>code</CollapseTrigger>
          <CollapseContent>
            <CopyBlock>
              <CodeBlock showLineNumbers></CodeBlock>
            </CopyBlock>
          </CollapseContent>
        </Collapse>
      </section>
    </div>
  );
}
