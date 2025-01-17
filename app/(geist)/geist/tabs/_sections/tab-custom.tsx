'use client';

import CopyBlock from '@/components/copy-block';
import CodeSnippet from '@/components/ui/code-snippet';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Tab, Tabs } from '@everest-ui/react';
import { cn } from '@/utils/lib';
import React from 'react';
import ScrollToLink from '../../_components/scroll-to-link';
import { tab_custom_code } from '../_snippets/snippets';

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
        <div className="flex flex-col items-center justify-between p-6 bg-background-100">
          <Tabs className="p-1 rounded-lg justify-center">
            {tabs.map((tab) => (
              <Tab
                isPillActive={hovered === tab.id}
                key={tab.id}
                onMouseEnter={() => setHovered(tab.id)}
                onMouseLeave={() => setHovered('')}
                className={cn(
                  'capitalize h-7 rounded-md px-3 text-gray-900 hover:text-foreground [&_[data-active-pill]]:bg-gray-200 [&_[data-active-pill]]:rounded-full'
                )}
              >
                {tab.label}
              </Tab>
            ))}
          </Tabs>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CopyBlock text={tab_custom_code}>
            <CodeSnippet showLineNumbers>{tab_custom_code}</CodeSnippet>
          </CopyBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
