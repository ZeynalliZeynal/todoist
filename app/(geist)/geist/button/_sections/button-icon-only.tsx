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
import { BUTTON_ICON_CODE } from '@/app/(geist)/geist/button/_snippets/snippets';

export default function ButtonIconOnly() {
  return (
    <section className="p-12">
      <ScrollToLink id="icon-only" href="#icon-only">
        <h2>Icon only</h2>
      </ScrollToLink>
      <p className="text-base text-gray-900 mt-4">
        To use only icon, the component should include the <code>svgOnly</code>{' '}
        prop and an <code>aria-label</code>.
      </p>
      <Collapse className="mt-7">
        <div className="flex items-center justify-between p-6 bg-background-100">
          <Button aria-label="Upload" iconOnly size="xs" className="rounded">
            <IoArrowUp />
          </Button>
          <Button aria-label="Upload" iconOnly size="sm">
            <IoArrowUp />
          </Button>
          <Button aria-label="Upload" iconOnly size="md">
            <IoArrowUp />
          </Button>
          <Button aria-label="Upload" iconOnly size="lg">
            <IoArrowUp />
          </Button>
          <Button
            aria-label="Upload"
            iconOnly
            size="xs"
            className="rounded-full"
          >
            <IoArrowUp />
          </Button>
          <Button
            aria-label="Upload"
            iconOnly
            size="sm"
            className="rounded-full"
          >
            <IoArrowUp />
          </Button>
          <Button
            aria-label="Upload"
            iconOnly
            size="md"
            className="rounded-full"
          >
            <IoArrowUp />
          </Button>
          <Button
            aria-label="Upload"
            iconOnly
            size="lg"
            className="rounded-full"
          >
            <IoArrowUp />
          </Button>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CopyBlock text={BUTTON_ICON_CODE}>
            <CodeSnippet showLineNumbers>{BUTTON_ICON_CODE}</CodeSnippet>
          </CopyBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
