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
import { Vercel } from '@/components/ui/icons/geist';

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
          <Stack padding={6} className="bg-background-100">
            <Book
              depth={4}
              // variant="simple"
              illustration={
                <svg
                  fill="none"
                  height="149"
                  viewBox="0 0 197 149"
                  width="197"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="#FED954" height="149" width="197"></rect>
                  <path
                    d="M147 48.4995H172C185.531 48.4995 196.5 59.4685 196.5 72.9995V148.427"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M0 48.5H24.5C38.031 48.5 49 37.531 49 24V0"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M147.5 48.5H172C185.531 48.5 196.5 37.531 196.5 24V0"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M0 48.5H24.5C38.031 48.5 49 59.469 49 73V98"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M146 48.5H73.5C59.969 48.5 49 37.531 49 24V0"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M196 48.5H122.5C108.969 48.5 98 37.531 98 24V0"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M97 48.5H73.5C59.969 48.5 49 59.469 49 73V99.5"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M98 132.5H122.5C136.031 132.5 147 121.531 147 108V98.9512"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M196 132.5H171.5C157.969 132.5 147 121.531 147 108V48.5"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M147 48.5H122.5C108.969 48.5 98 59.469 98 73V132"
                    stroke="#ECAF14"
                  ></path>
                  <path
                    d="M98 132.5H73.5C59.969 132.5 49 121.531 49 108V98.9512"
                    stroke="#ECAF14"
                  ></path>
                </svg>
              }
            >
              <Stack
                justify="center"
                padding={3}
                gap={8}
                className="h-full text-base font-semibold"
              >
                The user experience of the Frontend Cloud
                <Vercel />
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
