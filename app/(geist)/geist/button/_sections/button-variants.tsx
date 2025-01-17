import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/ui/code-block';
import { BUTTON_VARIANTS_CODE } from '@/app/(geist)/geist/button/_snippets/snippets';

export default function ButtonVariants() {
  return (
    <section className="p-12">
      <ScrollToLink id="variants" href="#variants">
        <h2>Variants</h2>
      </ScrollToLink>
      <p className="text-base text-gray-900 mt-4">
        The default size is small (sm).
      </p>
      <Collapse className="mt-7">
        <div className="flex items-center justify-between p-6 bg-background-100">
          <Button variant="primary">Upload</Button>
          <Button variant="secondary">Upload</Button>
          <Button variant="tertiary">Upload</Button>
          <Button variant="ghost">Upload</Button>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{BUTTON_VARIANTS_CODE}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
