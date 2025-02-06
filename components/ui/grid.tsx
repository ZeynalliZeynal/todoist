import { cn } from '@/lib/utils';
import React from 'react';

interface GridCellProps {
  row: number | string;
  column: number | string;
  children: React.ReactNode;
  className?: string;
}

interface GridCrossProps {
  row: number | string;
  column: number | string;
  className?: string;
}

interface GridProps extends React.ComponentProps<'div'> {
  rows: number;
  columns: number;
  aspectRatio?: boolean;
  children?:
    | React.ReactElement<GridCellProps>
    | React.ReactElement<GridCellProps>[];
}

export function Grid({
  children,
  columns,
  rows,
  aspectRatio,
  className,
  ...props
}: GridProps) {
  return (
    <div
      data-grid-container=""
      className={cn(
        'grid grid-cols-[repeat(var(--columns),1fr)] grid-rows-[repeat(var(--rows),1fr)] border-t border-l border-gray-200 relative',
        className
      )}
      {...props}
      style={
        {
          '--rows': rows,
          '--columns': columns,
          aspectRatio: aspectRatio ? `${columns}/${rows}` : 'auto',
        } as React.CSSProperties
      }
    >
      <div aria-hidden="true" data-grid-guides="" className="contents">
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <div
              key={index}
              data-grid-guide=""
              className="absolute inset-0 col-start-[var(--x)] col-end-[span_1] row-start-[var(--y)] row-end-[span_1] border-b border-r border-gray-200"
              style={{ '--x': x, '--y': y } as React.CSSProperties}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}

export function GridCell({ children, row, column, className }: GridCellProps) {
  return (
    <div
      className={cn(
        'relative z-10 center row-[var(--row)] col-[var(--column)]',
        className
      )}
      style={{ '--row': row, '--column': column } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export function GridCross({ row, column, className }: GridCrossProps) {
  return (
    <div
      aria-hidden="true"
      data-grid-cross=""
      className={cn(
        'size-fit absolute pointer-events-none [--guide-width:1px] [--cross-size:16px] [--cross-color:var(--ds-gray-900)] [--cross-half-size:calc((var(--cross-size)/2)+var(--guide-width)-0.5px)] col-start-[var(--cross-column)] row-start-[var(--cross-row)] z-[2] inset-[calc(var(--cross-half-size)*-1)]',
        className
      )}
      style={
        {
          '--cross-row': row,
          '--cross-column': column,
        } as React.CSSProperties
      }
    >
      <div
        data-grid-cross-line=""
        className="absolute border-0 border-[var(--guide-width)_solid_var(--cross-color)]"
        style={{
          width: 'var(--cross-half-size)',
          height: 'var(--cross-size)',
          borderRightWidth: 'var(--guide-width)',
        }}
      />
      <div
        data-grid-cross-line=""
        className="absolute border-0 border-[var(--guide-width)_solid_var(--cross-color)]"
        style={{
          width: 'var(--cross-size)',
          height: 'var(--cross-half-size)',
          borderBottomWidth: 'var(--guide-width)',
        }}
      />
    </div>
  );
}
