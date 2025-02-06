import React from 'react';
import styles from './grid.module.css';
import { cn } from '@/lib/utils';

interface GridCellProps {
  row: number | string;
  column: number | string;
  children: React.ReactNode;
}

interface GridCrossProps {
  row: number | string;
  column: number | string;
  className?: string;
}

interface GridProps extends React.ComponentProps<'div'> {
  rows: number;
  columns: number;
  children?:
    | React.ReactElement<GridCellProps>
    | React.ReactElement<GridCellProps>[];
}

export function Grid({
  children,
  columns,
  rows,
  className,
  ...props
}: GridProps) {
  return (
    <div
      data-grid-container=""
      className={cn(styles.grid, className)}
      {...props}
      style={
        {
          '--rows': rows,
          '--columns': columns,
          aspectRatio: `${columns}/${rows}`,
        } as React.CSSProperties
      }
    >
      <div aria-hidden="true" data-grid-guides="" className={styles.gridGuides}>
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <div
              key={index}
              data-grid-guide=""
              className={styles.gridGuide}
              style={{ '--x': x, '--y': y } as React.CSSProperties}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}

export function GridCell({ children, row, column }: GridCellProps) {
  return (
    <div
      className={styles.gridCell}
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
      className={cn(styles.gridCross, className)}
      style={
        { '--cross-row': row, '--cross-column': column } as React.CSSProperties
      }
    >
      <div
        data-grid-cross-line=""
        className={styles.gridCrossLine}
        style={{
          width: 'var(--cross-half-size)',
          height: 'var(--cross-size)',
          borderRightWidth: 'var(--guide-width)',
        }}
      />
      <div
        data-grid-cross-line=""
        className={styles.gridCrossLine}
        style={{
          width: 'var(--cross-size)',
          height: 'var(--cross-half-size)',
          borderBottomWidth: 'var(--guide-width)',
        }}
      />
    </div>
  );
}
