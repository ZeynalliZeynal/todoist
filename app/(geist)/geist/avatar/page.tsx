import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import CodeBlock from '@/components/ui/code-block';
import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import Avatar, { AvatarGroup } from '@/components/ui/avatar';

const AVATAR_CODE = `<Avatar
  src="https://avatars.githubusercontent.com/u/145213835?v=4"
  alt="zeynal"
  fallback="ZZ"
  size={48}
/>`;

const AVATAR_GROUP_CODE = `<AvatarGroup
  limit={4}
  avatars={[
    {
      src: 'https://vercel.com/api/www/avatar?u=leerob&s=64',
      alt: 'leerob',
    },
    {
      src: 'https://vercel.com/api/www/avatar?u=evilrabbit&s=64',
      alt: 'evilrabbit',
    },
    {
      src: 'https://vercel.com/api/www/avatar?u=sambecker&s=64',
      alt: 'sambecker',
    },
    {
      src: 'https://vercel.com/api/www/avatar?u=rauno&s=64',
      alt: 'rauno',
    },
    {
      src: 'https://vercel.com/api/www/avatar?u=sambecker&s=64',
      alt: 'sambecker',
    },
    {
      src: 'https://vercel.com/api/www/avatar?u=rauno&s=64',
      alt: 'rauno',
    },
  ]}
  size={48}
/>`;

export default function AvatarPage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Avatar</h1>
        <p className="text-gray-900">
          Avatars represent a user or a team. Stacked avatars represent a group
          of people
        </p>
      </section>
      <section className="p-12">
        <ScrollToLink id="usage" href="#usage">
          <h2>Usage</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <div className="p-6 bg-background-100 flex items-center gap-2">
            <Avatar
              src="https://avatars.githubusercontent.com/u/145213835?v=4"
              alt="zeynal"
              fallback="ZZ"
            />
            <Avatar fallback="ZZ" />
          </div>
          <CollapseTrigger>code</CollapseTrigger>
          <CollapseContent>
            <CodeBlock showLineNumbers>{AVATAR_CODE}</CodeBlock>
          </CollapseContent>
        </Collapse>
      </section>
      <section className="p-12">
        <ScrollToLink id="group" href="#group">
          <h2>Group</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <div className="p-6 bg-background-100 flex flex-col gap-4">
            <AvatarGroup
              avatars={[
                {
                  src: 'https://vercel.com/api/www/avatar?u=leerob&s=64',
                  alt: 'leerob',
                },
                {
                  src: 'https://vercel.com/api/www/avatar?u=evilrabbit&s=64',
                  alt: 'evilrabbit',
                },
                {
                  src: 'https://vercel.com/api/www/avatar?u=sambecker&s=64',
                  alt: 'sambecker',
                },
              ]}
            />
            <AvatarGroup
              limit={4}
              avatars={[
                {
                  src: 'https://vercel.com/api/www/avatar?u=leerob&s=64',
                  alt: 'leerob',
                },
                {
                  src: 'https://vercel.com/api/www/avatar?u=evilrabbit&s=64',
                  alt: 'evilrabbit',
                },
                {
                  src: 'https://vercel.com/api/www/avatar?u=sambecker&s=64',
                  alt: 'sambecker',
                },
                {
                  src: 'https://vercel.com/api/www/avatar?u=rauno&s=64',
                  alt: 'rauno',
                },
                {
                  src: 'https://vercel.com/api/www/avatar?u=sambecker&s=64',
                  alt: 'sambecker',
                },
                {
                  src: 'https://vercel.com/api/www/avatar?u=rauno&s=64',
                  alt: 'rauno',
                },
              ]}
            />
          </div>
          <CollapseTrigger>code</CollapseTrigger>
          <CollapseContent>
            <CodeBlock showLineNumbers>{AVATAR_GROUP_CODE}</CodeBlock>
          </CollapseContent>
        </Collapse>
      </section>
    </div>
  );
}
