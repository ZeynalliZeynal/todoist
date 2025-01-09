import Link from 'next/link';
import { DefaultLink } from '@/components/ui/button';
import { LuDownload } from 'react-icons/lu';
import TodoistBrand from './_sections/todoist-brand';
import CodeBlock from '@/components/ui/code-block';
import NextBrand from './_sections/next-brand';
import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';

const logo_usage = `import { TodoistLogoFull } from 'geist/logos';

<TodoistLogoFull height={32} />;`;

const nextjs_usage = `import { NextWordmark } from 'geist/logos';

<NextWordmark height={50} />`;

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
        <ScrollToLink id="todoist" href="#todoist">
          <h2 className="mb-4">Todoist</h2>
        </ScrollToLink>
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
      <section className="p-12 border-t">
        <ScrollToLink id="nextjs" href="#nextjs">
          <h2 className="mb-4">Next.js</h2>
        </ScrollToLink>
        <p className="text-base">
          The Next.js trademark includes the Next.js name & logo, and any word,
          phrase, image, or other designation that identifies any Vercel
          products. Please don’t modify the marks or use them in a confusing
          way, including suggesting sponsorship or endorsement by Vercel, or in
          a way that confuses Vercel with another brand.
        </p>
        <div className="mt-4">
          <DefaultLink
            href="/assets/logo_assets/nextjs-assets.zip"
            size="md"
            prefix={<LuDownload />}
            className="rounded-full"
            download
          >
            Download Next.js Assets
          </DefaultLink>
        </div>
      </section>
      <NextBrand />
      <CodeBlock lang="tsx">{nextjs_usage}</CodeBlock>
      <section className="p-12 border-b">
        <h2 className="mb-3">General Information</h2>
        <p className="text-base">
          By using the Todoist trademarks you agree to the guidelines as well as
          our Terms of Service and all our rules and policies. Todoist reserves
          the right to cancel, modify, or change the permission in these
          guidelines at any time at its sole discretion.
        </p>
      </section>
      <section className="p-12 border-b">
        <h2 className="mb-3">Usage</h2>
        <p className="text-base">
          You may use the Todoist marks to truthfully describe the products,
          services, and technologies that we offer. You may also use Todoist
          marks to truthfully state that you are a customer and are using a
          Todoist product. For example, &quot;Our website is hosted on the
          Todoist platform.&quot;
          <br />
          <br />
          All other uses of Todoist marks, including in connection with our
          vendors and products, software, or applications that utilize our open
          source code, require prior written permission from us. Note that a
          copyright license for software, even an open source software license,
          does not provide a license to use a trademark related to the project.
          For inquiries, please contact brand@Todoist.com.
          <br />
          <br />
          Any advertisements, documentation, websites, or other references that
          include permitted uses of the Todoist marks must also include the
          following attribution statement which can be displayed at the end of
          the material, in the footer of the document, or some other clear and
          conspicuous location that can be quickly identified: Todoist, the
          Todoist design, Next.js and related marks, designs and logos are
          trademarks or registered trademarks of Todoist, Inc. or its affiliates
          in the US and other countries.
        </p>
      </section>
    </>
  );
}
