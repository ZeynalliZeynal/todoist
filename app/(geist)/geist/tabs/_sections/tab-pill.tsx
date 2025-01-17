'use client';

import CopyBlock from '@/components/copy-block';
import CodeBlock from '@/components/ui/code-block';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Tab, Tabs } from '@/components/ui/tabs';
import React from 'react';
import ScrollToLink from '../../_components/scroll-to-link';
import { tab_pill_code } from '../_snippets/snippets';

const tabs = [
  {
    id: 'overview',
    label: 'Overview',
  },
  {
    id: 'integrations',
    label: 'integrations',
  },
  {
    id: 'activity',
    label: 'activity',
  },
  {
    id: 'domains',
    label: 'domains',
  },
  {
    id: 'usage',
    label: 'usage',
  },
  {
    id: 'monitoring',
    label: 'monitoring',
  },
  {
    id: 'ai',
    label: 'AI',
  },
];

export default function TabPill() {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <section className="p-12">
      <ScrollToLink id="active-pill" href="#active-pill">
        <h2>Active Pill</h2>
      </ScrollToLink>
      <p className="text-base text-gray-900 mt-4">
        Two main props available: <code>isPillActive</code> and{' '}
        <code>isIndicatorActive</code>. You can style each of them as you want.
      </p>
      <Collapse className="mt-7">
        <div className="flex flex-col items-center justify-between p-6 bg-background-100">
          <Tabs className="p-1 rounded-lg justify-center">
            {tabs.map((tab) => (
              <Tab
                isPillActive={activeTab === tab.id}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="capitalize data-[active]:text-foreground"
              >
                {tab.label}
              </Tab>
            ))}
          </Tabs>
        </div>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CopyBlock text={tab_pill_code}>
            <CodeBlock showLineNumbers>{tab_pill_code}</CodeBlock>
          </CopyBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
