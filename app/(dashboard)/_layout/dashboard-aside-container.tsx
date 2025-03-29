import { cn } from '@/lib/utils';

export default function DashboardAsideContainer({
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <aside
      className={cn(
        'flex flex-col gap-10 shrink-0 sticky top-12 h-fit',
        props.className,
      )}
      {...props}
    />
  );
}
