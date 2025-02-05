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

const code = `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem disabled>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

export default function DropdownMenuDisabledItem() {
  return (
    <section className="p-12">
      <ScrollToLink id="disabled-item" href="#disabled-item">
        <h2>Disabled item</h2>
      </ScrollToLink>
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
              <DropdownMenuItem disabled>Subscription</DropdownMenuItem>
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
