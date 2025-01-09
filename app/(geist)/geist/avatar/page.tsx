import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import CopyBlock from '@/components/copy-block';
import CodeBlock from '@/components/ui/code-block';

const AVATAR_GROUP_CODE = `import { AvatarGroup, Stack } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Stack gap={4}>
      <AvatarGroup
        members={[
          { username: 'evilrabbit' },
          { username: 'leerob' },
          { username: 'rauchg' },
        ]}
        size={32}
      />
      <AvatarGroup
        limit={4}
        members={[
          { username: 'sambecker' },
          { username: 'rauno' },
          { username: 'shuding' },
          { username: 'skllcrn' },
          { username: 'almonk' },
        ]}
        size={32}
      />
    </Stack>
  );
}`;

export default function AvatarPage() {
  return (
    <>
      <section className="p-12">
        <h1 className="mb-3">Avatar</h1>
        <p className="text-gray-900">
          Avatars represent a user or a team. Stacked avatars represent a group
          of people
        </p>
      </section>
      <section className="border-y p-12">
        <Collapse>
          <div className="p-6 bg-background-100">test</div>
          <CollapseTrigger>Show code</CollapseTrigger>
          <CollapseContent>
            <CopyBlock text={AVATAR_GROUP_CODE}>
              <CodeBlock>{AVATAR_GROUP_CODE}</CodeBlock>
            </CopyBlock>
          </CollapseContent>
        </Collapse>
      </section>
    </>
  );
}
