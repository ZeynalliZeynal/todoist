import Link from 'next/link';
import { DefaultLink } from '@/components/ui/button';
import { LuDownload } from 'react-icons/lu';
import TodoistBrand from './_sections/todoist-brand';
import CodeBlock from '@/components/ui/code-block';

const logo_usage = `import { VercelWordmark } from 'geist/logos';

<VercelWordmark height={32} />;`;

export default function BrandsPage() {
  return (
    <>
      <section className="p-12">
        <h1 className="mb-3">Brands</h1>
        <p className="text-gray-900 tracking-[-0.020625rem]">
          We’ve created the following guidelines to help others use our brand
          and assets, including our logo, content, and trademarks, without
          having to negotiate legal agreements for each use. Contact us and
          include a visual mockup for any intended use not covered by these
          guidelines.
        </p>
      </section>
      <section className="p-12 border-t">
        <h2 className="mb-4">Todoist</h2>
        <p className="text-base">
          The Todoist trademark includes the Todoist name & logo, and any word,
          phrase, image, or other designation that identifies any Todoist
          products. Please don’t modify the trademarks or use them in an altered
          way, including suggesting sponsorship or endorsement by Todoist, or in
          a way that confuses Todoist with another brand. For more information
          on correct usage, see{' '}
          <Link
            href="#"
            className="text-blue-900 hover:underline underline-offset-4"
          >
            Usage and misuse →
          </Link>
        </p>
        <div className="mt-4">
          <DefaultLink
            href="/assets/logo_assets/logo_assets.zip"
            size="md"
            prefix={<LuDownload />}
            className="rounded-full"
            download
          >
            Download Todoist Assets
          </DefaultLink>
        </div>
      </section>
      <TodoistBrand />
      <CodeBlock lang="tsx">{logo_usage}</CodeBlock>
    </>
  );
}
