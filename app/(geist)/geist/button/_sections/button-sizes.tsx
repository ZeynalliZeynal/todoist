import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Button } from '@everest-ui/react-button';
import CodeBlock from '@/components/ui/code-block';
import { BUTTON_SIZES_CODE } from '@/app/(geist)/geist/button/_snippets/snippets';
import GeistContentWrapper from '@/app/(geist)/geist/_components/geist-content-wrapper';

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
        <GeistContentWrapper>
          <Button>Upload</Button>
          <Button size="md">Upload</Button>
          <Button size="lg">Upload</Button>
        </GeistContentWrapper>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{BUTTON_SIZES_CODE}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
