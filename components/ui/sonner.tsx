'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      closeButton
      toastOptions={{
        classNames: {
          toast:
            'group toast items-center p-4 group-[.toaster]:bg-background-200 pointer-events-auto group-[.toaster]:text-foreground',
          description: 'group-[.toast]:text-neutral-500',
          actionButton:
            'group-[.toast]:bg-neutral-900 group-[.toast]:text-neutral-50',
          cancelButton:
            'group-[.toast]:bg-neutral-100 group-[.toast]:text-foreground',
          closeButton:
            '!static order-10 !transform-none ml-auto !size-8 !rounded-md !bg-transparent hover:!bg-gray-200 !border-none !text-inherit [&>svg]:size-4',
          success:
            '!bg-blue-700 !border-none !text-foreground [&_[data-close-button]:hover]:!bg-blue-800',
          warning:
            '!bg-amber-700 !border-none !text-background-200 [&_[data-close-button]:hover]:!bg-amber-800',
          error:
            '!bg-red-700 !border-none !text-background-200 [&_[data-close-button]:hover]:!bg-red-800',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
