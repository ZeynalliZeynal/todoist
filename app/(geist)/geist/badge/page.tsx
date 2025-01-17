import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import CodeBlock from '@/components/ui/code-block';
import ScrollToLink from '@/app/(geist)/geist/_components/scroll-to-link';
import { Stack } from '@/components/ui/stack';
import Badge from '@/components/ui/badge';
import { LuShield } from 'react-icons/lu';

const VARIANTS_CODE = `<Stack gap={2}>
  <Stack direction="row" gap={1}>
    <Badge variant="gray">Gray</Badge>
    <Badge variant="gray-subtle">Gray-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="blue">Blue</Badge>
    <Badge variant="blue-subtle">Blue</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="purple">Purple</Badge>
    <Badge variant="purple-subtle">Purple-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="amber">Amber</Badge>
    <Badge variant="amber-subtle">Amber-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="red">Red</Badge>
    <Badge variant="red-subtle">Red-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="pink">Pink</Badge>
    <Badge variant="pink-subtle">Pink-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="green">Green</Badge>
    <Badge variant="green-subtle">Green-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="teal">Teal</Badge>
    <Badge variant="teal-subtle">Teal-Subtle</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="invert">Invert</Badge>
  </Stack>
  <Stack direction="row" gap={1}>
    <Badge variant="trial">Trial</Badge>
  </Stack>
</Stack>`;

const BADGE_SIZES_CODE = `<Stack gap={2} padding={6}>
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</Stack>`;

const BADGE_ICONS_CODE = `<Stack align="center" direction="row" gap={1}>
  <Badge icon={<LuShield />} size="lg" variant="gray">
    gray
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="gray">
    gray
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="gray">
    gray
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="gray-subtle">
    gray
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="gray-subtle">
    gray
  </Badge>
  <Badge icon={<LuShield />} size="lg" variant="gray-subtle">
    gray
  </Badge>
</Stack>

<Stack align="center" direction="row" gap={1}>
  <Badge icon={<LuShield />} size="lg" variant="blue">
    blue
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="blue">
    blue
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="blue">
    blue
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="blue-subtle">
    blue
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="blue-subtle">
    blue
  </Badge>
  <Badge icon={<LuShield />} size="lg" variant="blue-subtle">
    blue
  </Badge>
</Stack>

<Stack align="center" direction="row" gap={1}>
  <Badge icon={<LuShield />} size="lg" variant="purple">
    purple
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="purple">
    purple
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="purple">
    purple
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="purple-subtle">
    purple
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="purple-subtle">
    purple
  </Badge>
  <Badge icon={<LuShield />} size="lg" variant="purple-subtle">
    purple
  </Badge>
</Stack>

<Stack align="center" direction="row" gap={1}>
  <Badge icon={<LuShield />} size="lg" variant="amber">
    amber
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="amber">
    amber
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="amber">
    amber
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="amber-subtle">
    amber
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="amber-subtle">
    amber
  </Badge>
  <Badge icon={<LuShield />} size="lg" variant="amber-subtle">
    amber
  </Badge>
</Stack>

<Stack align="center" direction="row" gap={1}>
  <Badge icon={<LuShield />} size="lg" variant="red">
    red
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="red">
    red
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="red">
    red
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="red-subtle">
    red
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="red-subtle">
    red
  </Badge>
  <Badge icon={<LuShield />} size="lg" variant="red-subtle">
    red
  </Badge>
</Stack>

<Stack align="center" direction="row" gap={1}>
  <Badge icon={<LuShield />} size="lg" variant="pink">
    pink
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="pink">
    pink
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="pink">
    pink
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="pink-subtle">
    pink
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="pink-subtle">
    pink
  </Badge>
  <Badge icon={<LuShield />} size="lg" variant="pink-subtle">
    pink
  </Badge>
</Stack>

<Stack align="center" direction="row" gap={1}>
  <Badge icon={<LuShield />} size="lg" variant="green">
    green
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="green">
    green
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="green">
    green
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="green-subtle">
    green
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="green-subtle">
    green
  </Badge>
  <Badge icon={<LuShield />} size="lg" variant="green-subtle">
    green
  </Badge>
</Stack>

<Stack align="center" direction="row" gap={1}>
  <Badge icon={<LuShield />} size="lg" variant="teal">
    teal
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="teal">
    teal
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="teal">
    teal
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="teal-subtle">
    teal
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="teal-subtle">
    teal
  </Badge>
  <Badge icon={<LuShield />} size="lg" variant="teal-subtle">
    teal
  </Badge>
</Stack>

<Stack align="center" direction="row" gap={1}>
  <Badge icon={<LuShield />} size="lg" variant="inverted">
    inverted
  </Badge>
  <Badge icon={<LuShield />} size="md" variant="inverted">
    inverted
  </Badge>
  <Badge icon={<LuShield />} size="sm" variant="inverted">
    inverted
  </Badge>
</Stack>`;

export default function BadgePage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Badge</h1>
        <p className="text-gray-900">
          A label that emphasizes an element that requires attention, or helps
          categorize with other similar elements.
        </p>
      </section>
      <section className="p-12">
        <ScrollToLink id="variants" href="#variants">
          <h2>Variants</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <Stack gap={2} padding={6} className="bg-background-100">
            <Stack direction="row" gap={1}>
              <Badge variant="gray">Gray</Badge>
              <Badge variant="gray-subtle">Gray-Subtle</Badge>
            </Stack>
            <Stack direction="row" gap={1}>
              <Badge variant="blue">Blue</Badge>
              <Badge variant="blue-subtle">Blue</Badge>
            </Stack>
            <Stack direction="row" gap={1}>
              <Badge variant="purple">Purple</Badge>
              <Badge variant="purple-subtle">Purple-Subtle</Badge>
            </Stack>
            <Stack direction="row" gap={1}>
              <Badge variant="amber">Amber</Badge>
              <Badge variant="amber-subtle">Amber-Subtle</Badge>
            </Stack>
            <Stack direction="row" gap={1}>
              <Badge variant="red">Red</Badge>
              <Badge variant="red-subtle">Red-Subtle</Badge>
            </Stack>
            <Stack direction="row" gap={1}>
              <Badge variant="pink">Pink</Badge>
              <Badge variant="pink-subtle">Pink-Subtle</Badge>
            </Stack>
            <Stack direction="row" gap={1}>
              <Badge variant="green">Green</Badge>
              <Badge variant="green-subtle">Green-Subtle</Badge>
            </Stack>
            <Stack direction="row" gap={1}>
              <Badge variant="teal">Teal</Badge>
              <Badge variant="teal-subtle">Teal-Subtle</Badge>
            </Stack>
            <Stack direction="row" gap={1}>
              <Badge variant="inverted">Inverted</Badge>
            </Stack>
            <Stack direction="row" gap={1}>
              <Badge variant="trial">Trial</Badge>
            </Stack>
          </Stack>
          <CollapseTrigger>code</CollapseTrigger>
          <CollapseContent>
            <CodeBlock showLineNumbers>{VARIANTS_CODE}</CodeBlock>
          </CollapseContent>
        </Collapse>
      </section>
      <section className="p-12">
        <ScrollToLink id="sizes" href="#sizes">
          <h2>Sizes</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <Stack gap={2} padding={6} className="bg-background-100">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
          </Stack>
          <CollapseTrigger>code</CollapseTrigger>
          <CollapseContent>
            <CodeBlock showLineNumbers>{BADGE_SIZES_CODE}</CodeBlock>
          </CollapseContent>
        </Collapse>
      </section>
      <section className="p-12">
        <ScrollToLink id="with-icons" href="#with-icons">
          <h2>With Icons</h2>
        </ScrollToLink>
        <Collapse className="mt-7">
          <Stack gap={2} padding={6} className="bg-background-100">
            <Stack align="center" direction="row" gap={1}>
              <Badge icon={<LuShield />} size="lg" variant="gray">
                gray
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="gray">
                gray
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="gray">
                gray
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="gray-subtle">
                gray
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="gray-subtle">
                gray
              </Badge>
              <Badge icon={<LuShield />} size="lg" variant="gray-subtle">
                gray
              </Badge>
            </Stack>

            <Stack align="center" direction="row" gap={1}>
              <Badge icon={<LuShield />} size="lg" variant="blue">
                blue
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="blue">
                blue
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="blue">
                blue
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="blue-subtle">
                blue
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="blue-subtle">
                blue
              </Badge>
              <Badge icon={<LuShield />} size="lg" variant="blue-subtle">
                blue
              </Badge>
            </Stack>

            <Stack align="center" direction="row" gap={1}>
              <Badge icon={<LuShield />} size="lg" variant="purple">
                purple
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="purple">
                purple
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="purple">
                purple
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="purple-subtle">
                purple
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="purple-subtle">
                purple
              </Badge>
              <Badge icon={<LuShield />} size="lg" variant="purple-subtle">
                purple
              </Badge>
            </Stack>

            <Stack align="center" direction="row" gap={1}>
              <Badge icon={<LuShield />} size="lg" variant="amber">
                amber
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="amber">
                amber
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="amber">
                amber
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="amber-subtle">
                amber
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="amber-subtle">
                amber
              </Badge>
              <Badge icon={<LuShield />} size="lg" variant="amber-subtle">
                amber
              </Badge>
            </Stack>

            <Stack align="center" direction="row" gap={1}>
              <Badge icon={<LuShield />} size="lg" variant="red">
                red
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="red">
                red
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="red">
                red
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="red-subtle">
                red
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="red-subtle">
                red
              </Badge>
              <Badge icon={<LuShield />} size="lg" variant="red-subtle">
                red
              </Badge>
            </Stack>

            <Stack align="center" direction="row" gap={1}>
              <Badge icon={<LuShield />} size="lg" variant="pink">
                pink
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="pink">
                pink
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="pink">
                pink
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="pink-subtle">
                pink
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="pink-subtle">
                pink
              </Badge>
              <Badge icon={<LuShield />} size="lg" variant="pink-subtle">
                pink
              </Badge>
            </Stack>

            <Stack align="center" direction="row" gap={1}>
              <Badge icon={<LuShield />} size="lg" variant="green">
                green
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="green">
                green
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="green">
                green
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="green-subtle">
                green
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="green-subtle">
                green
              </Badge>
              <Badge icon={<LuShield />} size="lg" variant="green-subtle">
                green
              </Badge>
            </Stack>

            <Stack align="center" direction="row" gap={1}>
              <Badge icon={<LuShield />} size="lg" variant="teal">
                teal
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="teal">
                teal
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="teal">
                teal
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="teal-subtle">
                teal
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="teal-subtle">
                teal
              </Badge>
              <Badge icon={<LuShield />} size="lg" variant="teal-subtle">
                teal
              </Badge>
            </Stack>

            <Stack align="center" direction="row" gap={1}>
              <Badge icon={<LuShield />} size="lg" variant="inverted">
                inverted
              </Badge>
              <Badge icon={<LuShield />} size="md" variant="inverted">
                inverted
              </Badge>
              <Badge icon={<LuShield />} size="sm" variant="inverted">
                inverted
              </Badge>
            </Stack>
          </Stack>
          <CollapseTrigger>code</CollapseTrigger>
          <CollapseContent>
            <CodeBlock showLineNumbers>{BADGE_ICONS_CODE}</CodeBlock>
          </CollapseContent>
        </Collapse>
      </section>
    </div>
  );
}
