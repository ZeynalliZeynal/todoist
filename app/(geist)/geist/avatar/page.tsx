import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/primitives/collapse/collapse';

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
          <CollapseTrigger>Show code</CollapseTrigger>
          <CollapseContent>test</CollapseContent>
        </Collapse>
      </section>
    </>
  );
}
