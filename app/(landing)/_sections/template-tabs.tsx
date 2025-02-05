'use client';

import CardSheet from '@/components/ui/card-sheet';

import { Tab, Tabs } from '@/components/ui/primitives/tabs';
import { cn } from '@/utils/lib';
import React from 'react';

export default function TemplateTabs({
  categories,
}: {
  categories: TemplateCategory[];
}) {
  const [activeValue, setActiveValue] = React.useState(categories[0].name);

  return (
    <div className="space-y-8 lg:p-12 p-8">
      <Tabs className="border rounded-full overflow-x-auto">
        {categories.map((category, index) => (
          <Tab
            key={index}
            isPillActive={activeValue === category.name}
            onClick={() => setActiveValue(category.name)}
            className={cn(
              'font-semibold h-10 px-4 rounded-full flex-grow text-gray-900 transition text-balance [&_[data-active-pill]]:border [&_[data-active-pill]]:rounded-full',
              category.name === activeValue && 'text-foreground'
            )}
          >
            {category.name}
          </Tab>
        ))}
      </Tabs>
      <div className="max-h-[396px] overflow-y-auto">
        {categories.map(
          (category, index) =>
            category.name === activeValue && (
              <div key={index} className="grid grid-cols-2 gap-8">
                {category.templates.map((template, index) => (
                  <CardSheet
                    key={index}
                    href="/"
                    img={template.imageUrl}
                    alt={template.name}
                  >
                    <div className="p-4 bg-background-200">{template.name}</div>
                  </CardSheet>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
}
