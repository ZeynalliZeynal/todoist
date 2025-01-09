import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import CopyBlock from '@/components/copy-block';
import CodeBlock from '@/components/ui/code-block';
import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import Book from '@/components/ui/book';
import { Stack } from '@/components/ui/stack';

const VARIANTS_CODE = `<Stack gap={2}>
  <Stack direction="row" gap={1}>
    <Badge variant="gray">Gray</Badge>
    <Badge variant="gray-subtle">Gray-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="blue">Blue</Badge>
    <Badge variant="blue-subtle">Blue</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="purple">Purple</Badge>
    <Badge variant="purple-subtle">Purple-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="amber">Amber</Badge>
    <Badge variant="amber-subtle">Amber-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="red">Red</Badge>
    <Badge variant="red-subtle">Red-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="pink">Pink</Badge>
    <Badge variant="pink-subtle">Pink-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="green">Green</Badge>
    <Badge variant="green-subtle">Green-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="teal">Teal</Badge>
    <Badge variant="teal-subtle">Teal-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="invert">Invert</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="trial">Trial</Badge>
  </Stack>
</Stack>`;

const BADGE_SIZES_CODE = `<Stack gap={2} padding={6}>
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</Stack>`;

export default function BookPage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Book</h1>
        <p className="text-gray-900">
          A label that emphasizes an element that requires attention, or helps
          categorize with other similar elements.
        </p>
      </section>
      <section className="p-12">
        <ScrollToLink id="variants" href="#variants">
          <h2>Variants</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <Stack padding={6}>
            <Book depth={4} texture stripe="bg-amber-900 h-28">
              <Stack
                justify="center"
                padding={3}
                className="h-full text-base font-semibold"
              >
                The user experience of the Frontend Cloud
                {/*<Logo className="size-4" />*/}
              </Stack>
            </Book>
          </Stack>
          <CollapseTrigger>code</CollapseTrigger>
          <CollapseContent>
            <CopyBlock text={VARIANTS_CODE}>
              <CodeBlock showLineNumbers>{VARIANTS_CODE}</CodeBlock>
            </CopyBlock>
          </CollapseContent>
        </Collapse>
      </section>
    </div>
  );
}
