'use client';

import React from 'react';

import { Accordion as AccordionPrimitive } from '@everest-ui/react-accordion';
import { cn } from '@/lib/utils';

export function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive>) {
  return (
    <AccordionPrimitive
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item className={cn('border-b', className)} {...props} />
  );
}

export function AccordionTrigger({
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Trigger
      className={cn(
        !asChild &&
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    />
  );
}

export function AccordionContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        'overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className,
      )}
      {...props}
    >
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
