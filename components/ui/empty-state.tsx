import { cn } from '@/lib/utils';

interface EmptyStateProps extends React.ComponentProps<'div'> {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export default function EmptyState({
  title,
  description,
  icon,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn('size-full center flex-col gap-6 text-gray-900', className)}
      {...props}
    >
      <div className="center p-3.5 text-[2rem] border rounded-lg">{icon}</div>
      <div className="text-center space-y-2">
        <div className="text-base font-medium text-foreground">{title}</div>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
