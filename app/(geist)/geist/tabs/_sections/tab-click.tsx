'use client';

import CopyBlock from '@/components/copy-block';
import CodeSnippet from '@/components/ui/code-snippet';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import ScrollToLink from '../../_components/scroll-to-link';
import { tab_onclick_code } from '../_snippets/snippets';
import { Tab, Tabs } from '@/components/ui/tabs';
import React from 'react';

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

export default function TabClick() {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <section className="p-12">
      <ScrollToLink id="disabled" href="#disabled">
        <h2>Click event</h2>
      </ScrollToLink>
      <Collapse className="mt-7">
        <div className="flex flex-col items-center justify-between p-6 bg-background-100">
          <Tabs className="p-1 rounded-lg justify-center">
            {tabs.map((tab) => (
              <Tab
                isActive={activeTab === tab.id}
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
          <CopyBlock text={tab_onclick_code}>
            <CodeSnippet showLineNumbers>{tab_onclick_code}</CodeSnippet>
          </CopyBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
