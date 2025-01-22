'use client';

import CodeBlock from '@/components/ui/code-block';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Tab, Tabs } from '@/components/ui/primitives/tabs/tabs';
import { cn } from '@/utils/lib';
import React from 'react';
import ScrollToLink from '../../_components/scroll-to-link';
import { tab_custom_code } from '../_snippets/snippets';
import GeistContentWrapper from '@/app/(geist)/geist/_components/geist-content-wrapper';

const tabs = [
  {
    id: 'products',
    label: 'products',
  },
  {
    id: 'solutions',
    label: 'solutions',
  },
  {
    id: 'resources',
    label: 'resources',
  },
  {
    id: 'enterprice',
    label: 'enterprice',
  },
  {
    id: 'docs',
    label: 'docs',
  },
  {
    id: 'pricing',
    label: 'pricing',
  },
];

export default function TabCustom() {
  const [hovered, setHovered] = React.useState('');

  return (
    <section className="p-12">
      <ScrollToLink id="active-indicator" href="#active-indicator">
        <h2>Custom tabs</h2>
      </ScrollToLink>
      <p className="text-base text-gray-900 mt-4">
        Fully customizable with <code>data</code> attributes.
      </p>
      <Collapse className="mt-7">
        <GeistContentWrapper>
          <Tabs className="p-1 rounded-lg justify-center">
            {tabs.map((tab) => (
              <Tab
                isPillActive={hovered === tab.id}
                key={tab.id}
                onMouseEnter={() => setHovered(tab.id)}
                onMouseLeave={() => setHovered('')}
                className={cn(
                  'capitalize h-7 rounded-md px-3 text-gray-900 hover:text-foreground [&_[data-active-pill]]:bg-gray-200 [&_[data-active-pill]]:rounded-full',
                )}
              >
                {tab.label}
              </Tab>
            ))}
          </Tabs>
        </GeistContentWrapper>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{tab_custom_code}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
