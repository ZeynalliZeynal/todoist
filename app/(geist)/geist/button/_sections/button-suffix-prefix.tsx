import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Button } from '@/components/ui/button';
import CopyBlock from '@/components/copy-block';
import CodeSnippet from '@/components/ui/code-snippet';
import { IoArrowUp } from 'react-icons/io5';
import { BUTTON_SUFFIX_PREFIX_CODE } from '@/app/(geist)/geist/button/_snippets/snippets';

export default function ButtonSuffixPrefix() {
  return (
    <section className="p-12">
      <ScrollToLink id="suffix-and-prefix" href="#suffix-and-prefix">
        <h2>Prefix and suffix</h2>
      </ScrollToLink>
      <Collapse className="mt-7">
        <div className="flex items-center justify-between p-6 bg-background-100">
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
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CopyBlock text={BUTTON_SUFFIX_PREFIX_CODE}>
            <CodeSnippet showLineNumbers>
              {BUTTON_SUFFIX_PREFIX_CODE}
            </CodeSnippet>
          </CopyBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
