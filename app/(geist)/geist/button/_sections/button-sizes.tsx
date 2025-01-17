import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/ui/code-block';
import { BUTTON_SIZES_CODE } from '@/app/(geist)/geist/button/_snippets/snippets';

export default function ButtonSizes() {
  return (
    <section className="p-12">
      <ScrollToLink id="sizes" href="#sizes">
        <h2>Sizes</h2>
      </ScrollToLink>
      <p className="text-base text-gray-900 mt-4">
        The default size is small (sm).
      </p>
      <Collapse className="mt-7">
        <div className="flex items-center justify-between p-6 bg-background-100">
          <Button>Upload</Button>
          <Button size="md">Upload</Button>
          <Button size="lg">Upload</Button>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{BUTTON_SIZES_CODE}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
