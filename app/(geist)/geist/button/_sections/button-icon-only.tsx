import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Button } from '@everest-ui/geist-button';
import CodeBlock from '@/components/ui/code-block';
import { IoArrowUp } from 'react-icons/io5';
import { BUTTON_ICON_CODE } from '@/app/(geist)/geist/button/_snippets/snippets';
import GeistContentWrapper from '@/app/(geist)/geist/_components/geist-content-wrapper';

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
        <GeistContentWrapper>
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
        </GeistContentWrapper>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{BUTTON_ICON_CODE}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
