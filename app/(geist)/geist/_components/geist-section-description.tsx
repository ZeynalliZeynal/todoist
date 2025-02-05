import { cn } from '@/lib/utils';

export default function GeistSectionDescription({
  children,
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-base text-gray-900 mt-4', className)} {...props}>
      {children}
    </p>
  );
}
