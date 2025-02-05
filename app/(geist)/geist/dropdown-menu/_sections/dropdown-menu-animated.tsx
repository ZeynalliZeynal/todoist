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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import GeistSectionDescription from '@/app/(geist)/geist/_components/geist-section-description';

const code = `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

export default function DropdownMenuAnimated() {
  return (
    <section className="p-12">
      <ScrollToLink id="animated" href="#animated">
        <h2>Apply animations</h2>
      </ScrollToLink>
      <GeistSectionDescription>
        Apply animations using <code>data-[state=[open|closed]]</code> attribute
        to control the opening and closing states.
      </GeistSectionDescription>
      <Collapse className="mt-7">
        <GeistContentWrapper>
          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
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
