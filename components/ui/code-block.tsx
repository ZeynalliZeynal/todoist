import type { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';
import CopyBlock from '../copy-block';

interface Props {
  children: string;
  lang: BundledLanguage;
}

export default async function CodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: 'github-dark-high-contrast',
    defaultColor: 'light',
  });

  return (
    <CopyBlock text={props.children}>
      <div
        className="[&>pre]:!bg-background-100 [&>pre]:p-5"
        dangerouslySetInnerHTML={{ __html: out }}
      />
    </CopyBlock>
  );
}
