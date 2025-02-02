import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Button } from '@everest-ui/geist-button';
import CodeBlock from '@/components/ui/code-block';
import { IoArrowUp } from 'react-icons/io5';
import { BUTTON_SUFFIX_PREFIX_CODE } from '@/app/(geist)/geist/button/_snippets/snippets';
import GeistContentWrapper from '@/app/(geist)/geist/_components/geist-content-wrapper';

export default function ButtonSuffixPrefix() {
  return (
    <section className="p-12">
      <ScrollToLink id="suffix-and-prefix" href="#suffix-and-prefix">
        <h2>Prefix and suffix</h2>
      </ScrollToLink>
      <Collapse className="mt-7">
        <GeistContentWrapper>
          <Button variant="secondary" size="md" prefix={<IoArrowUp />}>
            Upload
          </Button>
          <Button variant="secondary" size="md" suffix={<IoArrowUp />}>
            Upload
          </Button>
          <Button
            variant="secondary"
            size="md"
            prefix={<IoArrowUp />}
            suffix={<IoArrowUp />}
          >
            Upload
          </Button>
        </GeistContentWrapper>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{BUTTON_SUFFIX_PREFIX_CODE}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
