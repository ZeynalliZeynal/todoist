'use client';

import CardSheet from '@/components/ui/card-sheet';

import { motion } from 'framer-motion';
import { cn } from '@/utils/lib';
import { useTabs } from '@/hooks/useTabs';

export default function TemplateTabs({
  categories,
}: {
  categories: TemplateCategory[];
}) {
  const { container, activeValue, activeTab, handleClick, pillStyles } =
    useTabs({ defaultValue: categories[0].name });

  return (
    <div className="space-y-8 p-12">
      <div
        ref={container}
        className="flex items-center border rounded-full justify-between"
      >
        <motion.div
          className="absolute border rounded-full z-[1] bg-background-100 pointer-events-none"
          animate={{
            width: pillStyles.width,
            x: pillStyles.left,
            height: pillStyles.height,
            opacity: activeTab ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
        />
        {categories.map((category, index) => (
          <button
            ref={category.name === activeValue ? activeTab : undefined}
            key={index}
            onClick={() => handleClick(category.name)}
            className={cn(
              'font-semibold h-10 px-4 rounded-full text-gray-900 transition text-balance',
              category.name === activeValue && 'text-foreground'
            )}
          >
            <span className="relative z-[2]">{category.name}</span>
          </button>
        ))}
      </div>
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
  );
}
