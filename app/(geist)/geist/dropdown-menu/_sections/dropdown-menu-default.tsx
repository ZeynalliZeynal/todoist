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
} from '@everest-ui/react-dropdown-menu';

const code = `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

export default function DropdownMenuDefault() {
  return (
    <section className="p-12">
      <ScrollToLink id="default" href="#default">
        <h2>Default</h2>
      </ScrollToLink>
      <p className="text-base text-gray-900 mt-4">
        Default trigger extends the <code>Button</code> component.
      </p>
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
