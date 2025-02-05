import GeistContentWrapper from '@/app/(geist)/geist/_components/geist-content-wrapper';
import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import CodeBlock from '@/components/ui/code-block';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import GeistSectionDescription from '@/app/(geist)/geist/_components/geist-section-description';

const code = `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent align="center" side="bottom">
    <DropdownMenuItem>center-bottom</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent
    align="start"
    side="left"
    className="my-0 mx-2"
  >
    <DropdownMenuItem>start-left</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent align="end" side="right" className="my-0 mx-2">
    <DropdownMenuItem>end-left</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

export default function DropdownMenuPositions() {
  return (
    <section className="p-12">
      <ScrollToLink id="positions" href="#positions">
        <h2>Positions</h2>
      </ScrollToLink>
      <GeistSectionDescription>
        Position the menu using <code>align</code> and <code>side</code> props.
      </GeistSectionDescription>
      <Collapse className="mt-7">
        <GeistContentWrapper className="justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="bottom">
              <DropdownMenuItem>center-bottom</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              side="left"
              className="my-0 mx-2"
            >
              <DropdownMenuItem>start-left</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="right" className="my-0 mx-2">
              <DropdownMenuItem>end-left</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </GeistContentWrapper>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{code}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
