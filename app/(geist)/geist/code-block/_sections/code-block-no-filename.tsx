import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import CodeBlock from '@/components/ui/code-block';

const code_example = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;

const code = `const code_example = \`function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}\`;

<CodeBlock showLineNumbers>{code_example}</CodeBlock>`;

export default function CodeBlockNoFilename() {
  return (
    <section className="p-12">
      <ScrollToLink id="no-filename" href="#no-filename">
        <h2>No filename</h2>
      </ScrollToLink>
      <Collapse className="mt-7">
        <div className="flex items-center justify-between p-6 bg-background-100">
          <CodeBlock showLineNumbers className="border rounded-md">
            {code_example}
          </CodeBlock>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock aria-label="Code block example" showLineNumbers>
            {code}
          </CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
