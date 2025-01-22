'use client';

import CodeBlock from '@/components/ui/code-block';
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from '@/components/ui/collapse';
import { Tab, Tabs } from '@/components/ui/tabs';
import React from 'react';
import ScrollToLink from '../../_components/scroll-to-link';
import { tab_indicator_code } from '../_snippets/snippets';
import GeistContentWrapper from '@/app/(geist)/geist/_components/geist-content-wrapper';

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

export default function TabIndicator() {
  const [hovered, setHovered] = React.useState('');
  const [active, setActive] = React.useState(tabs[0].id);

  return (
    <section className="p-12">
      <ScrollToLink id="active-indicator" href="#active-indicator">
        <h2>Indicator</h2>
      </ScrollToLink>
      <p className="text-base text-gray-900 mt-4">
        The main goal of the second indicator here is to make it easy to
        indicate the active tab with one prop - <code>isIndicatorActive</code>,
        and to indicate the hovered tab with another prop -{' '}
        <code>isPillActive</code>. You decide which should be active on which
        event, and you decide how to style each of them separately.
      </p>
      <Collapse className="mt-7">
        <GeistContentWrapper>
          <Tabs className="p-1 rounded-lg justify-center">
            {tabs.map((tab) => (
              <Tab
                isPillActive={hovered === tab.id}
                isIndicatorActive={active === tab.id}
                key={tab.id}
                onClick={() => setActive(tab.id)}
                onMouseEnter={() => setHovered(tab.id)}
                onMouseLeave={() => setHovered('')}
                className="capitalize data-[active]:text-foreground"
              >
                {tab.label}
              </Tab>
            ))}
          </Tabs>
        </GeistContentWrapper>
        <CollapseTrigger>code</CollapseTrigger>
        <CollapseContent>
          <CodeBlock showLineNumbers>{tab_indicator_code}</CodeBlock>
        </CollapseContent>
      </Collapse>
    </section>
  );
}
