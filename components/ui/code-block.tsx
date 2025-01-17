import CopyBlock from '../copy-block';
import { Highlight } from 'prism-react-renderer';
import { cn } from '@/utils/lib';

interface Props {
  children: string;
  lang?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock(props: Props) {
  return (
    <CopyBlock text={props.children}>
      <Highlight language={props.lang || 'tsx'} code={props.children}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="py-5 bg-background-100 [counter-reset:line] overflow-auto">
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                className={cn(
                  'px-5',
                  props.showLineNumbers &&
                    'before:w-4 before:[counter-increment:line] before:inline-block before:text-gray-600 before:content-[counter(line)] before:mr-5 before:font-geist-mono before:text-right before:text-xs',
                )}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </CopyBlock>
  );
}
