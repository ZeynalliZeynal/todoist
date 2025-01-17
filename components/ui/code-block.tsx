import { Highlight } from 'prism-react-renderer';
import { cn } from '@/utils/lib';
import { ComponentProps } from 'react';
import Copy from '@/components/ui/copy';
import { IoLogoReact } from 'react-icons/io5';

interface Props extends ComponentProps<'pre'> {
  children: string;
  lang?: string;
  showLineNumbers?: boolean;
  filename?: string;
}

export default function CodeBlock(props: Props) {
  const { children, lang, showLineNumbers, filename, className, ...etc } =
    props;

  return (
    <div
      className={cn(
        'w-full rounded-md',
        filename ? 'border' : 'relative group',
      )}
    >
      {!filename && (
        <Copy
          text={children}
          size="sm"
          className="!absolute top-4 right-4 group-hover:opacity-100 focus-visible:opacity-100 opacity-0"
        />
      )}
      <Highlight language={lang || 'tsx'} code={children}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <div className="flex flex-col">
            {filename && (
              <div className="h-12 pl-3 pr-4 flex items-center justify-between border-b text-gray-900 bg-background-200 rounded-t-md">
                <div className="flex gap-2 items-center">
                  {(filename.includes('tsx') || filename.includes('jsx')) && (
                    <IoLogoReact size={16} />
                  )}
                  {filename}
                </div>
                <Copy text={children} size="sm" variant="tertiary" />
              </div>
            )}
            <pre
              className={cn(
                'py-5 bg-background-100 [counter-reset:line] overflow-auto',
                className,
              )}
              {...etc}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  className={cn(
                    'px-5',
                    showLineNumbers &&
                      'before:w-4 before:[counter-increment:line] before:inline-block before:text-gray-600 before:content-[counter(line)] before:mr-5 before:font-geist-mono before:text-right before:text-xs',
                  )}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  );
}
