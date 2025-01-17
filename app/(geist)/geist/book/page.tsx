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
import { Logo } from '@/components/ui/icons/logo';

const DEFAULT_BOOK_CODE = `<Book>
  <Stack
    justify="center"
    padding={3}
    gap={4}
    className="h-full text-base font-semibold"
  >
    The user experience of the Frontend Cloud
    <Logo height={16} />
  </Stack>
</Book>`;

const VARIANTS_CODE = `<Book
  variant="simple"
  illustration={
    <svg
      fill="none"
      height="56"
      viewBox="0 0 36 56"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M3.03113 28.0005C6.26017 23.1765 11.7592 20.0005 18 20.0005C24.2409 20.0005 29.7399 23.1765 32.9689 28.0005C29.7399 32.8244 24.2409 36.0005 18 36.0005C11.7592 36.0005 6.26017 32.8244 3.03113 28.0005Z"
        fill="#0070F3"
        fill-rule="evenodd"
      ></path>
      <path
        clip-rule="evenodd"
        d="M32.9691 28.0012C34.8835 25.1411 36 21.7017 36 18.0015C36 8.06034 27.9411 0.00146484 18 0.00146484C8.05887 0.00146484 0 8.06034 0 18.0015C0 21.7017 1.11648 25.1411 3.03094 28.0012C6.25996 23.1771 11.7591 20.001 18 20.001C24.2409 20.001 29.74 23.1771 32.9691 28.0012Z"
        fill="#45DEC4"
        fill-rule="evenodd"
      ></path>
      <path
        clip-rule="evenodd"
        d="M32.9692 28.0005C29.7402 32.8247 24.241 36.001 18 36.001C11.759 36.001 6.25977 32.8247 3.03077 28.0005C1.11642 30.8606 0 34.2999 0 38C0 47.9411 8.05887 56 18 56C27.9411 56 36 47.9411 36 38C36 34.2999 34.8836 30.8606 32.9692 28.0005Z"
        fill="#E5484D"
        fill-rule="evenodd"
      ></path>
    </svg>
  }
>
  <Stack justify="center" padding={3} className="font-semibold">
    The user experience of the Frontend Cloud
  </Stack>
</Book>
<Book>
  <Stack
    justify="center"
    padding={3}
    gap={4}
    className="h-full text-base font-semibold"
  >
    The user experience of the Frontend Cloud
    <Logo height={16} />
  </Stack>
</Book>`;

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
        <ScrollToLink id="default" href="#default">
          <h2>Default</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <Stack padding={6} className="bg-background-100">
            <Book>
              <Stack
                justify="center"
                padding={3}
                gap={4}
                className="h-full text-base font-semibold"
              >
                The user experience of the Frontend Cloud
                <Logo height={16} />
              </Stack>
            </Book>
          </Stack>
          <CollapseTrigger>code</CollapseTrigger>
          <CollapseContent>
            <CopyBlock text={DEFAULT_BOOK_CODE}>
              <CodeBlock showLineNumbers>{DEFAULT_BOOK_CODE}</CodeBlock>
            </CopyBlock>
          </CollapseContent>
        </Collapse>
      </section>
      <section className="p-12">
        <ScrollToLink id="variants" href="#variants">
          <h2>Variants</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <Stack
            padding={6}
            direction="row"
            gap={8}
            className="bg-background-100"
          >
            <Book variant="simple">
              <Stack
                justify="center"
                padding={3}
                gap={4}
                className="text-base font-semibold"
              >
                The user experience of the Frontend Cloud
                <svg
                  fill="none"
                  height="56"
                  viewBox="0 0 36 56"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M3.03113 28.0005C6.26017 23.1765 11.7592 20.0005 18 20.0005C24.2409 20.0005 29.7399 23.1765 32.9689 28.0005C29.7399 32.8244 24.2409 36.0005 18 36.0005C11.7592 36.0005 6.26017 32.8244 3.03113 28.0005Z"
                    fill="#0070F3"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M32.9691 28.0012C34.8835 25.1411 36 21.7017 36 18.0015C36 8.06034 27.9411 0.00146484 18 0.00146484C8.05887 0.00146484 0 8.06034 0 18.0015C0 21.7017 1.11648 25.1411 3.03094 28.0012C6.25996 23.1771 11.7591 20.001 18 20.001C24.2409 20.001 29.74 23.1771 32.9691 28.0012Z"
                    fill="#45DEC4"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M32.9692 28.0005C29.7402 32.8247 24.241 36.001 18 36.001C11.759 36.001 6.25977 32.8247 3.03077 28.0005C1.11642 30.8606 0 34.2999 0 38C0 47.9411 8.05887 56 18 56C27.9411 56 36 47.9411 36 38C36 34.2999 34.8836 30.8606 32.9692 28.0005Z"
                    fill="#E5484D"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </Stack>
            </Book>
            <Book>
              <Stack
                justify="center"
                padding={3}
                gap={4}
                className="h-full text-base font-semibold"
              >
                The user experience of the Frontend Cloud
                <Logo height={16} />
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
      <section className="p-12">
        <ScrollToLink id="width" href="#width">
          <h2>Width</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <Stack
            padding={6}
            direction="row"
            align="end"
            gap={8}
            className="bg-background-100 overflow-auto"
          >
            <Book width={300} depth={7}>
              <Stack
                justify="center"
                padding={3}
                gap={5}
                className="text-2xl font-bold"
              >
                The user experience of the Frontend Cloud
                <Logo height={16} />
              </Stack>
            </Book>
            <Book width={200}>
              <Stack
                justify="center"
                padding={3}
                gap={4}
                className="text-base font-bold"
              >
                The user experience of the Frontend Cloud
                <Logo height={16} />
              </Stack>
            </Book>
            <Book width={150}>
              <Stack
                justify="center"
                padding={3}
                gap={3}
                className="text-xs font-semibold"
              >
                The user experience of the Frontend Cloud
                <Logo height={16} />
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
