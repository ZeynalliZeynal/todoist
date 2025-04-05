import { cn } from '@/lib/utils';
import React from 'react';
import styles from './grid.module.css';

interface GridOwnProps {
  rows?: number;
  columns?: number;
  smColumns?: number;
  smRows?: number;
  mdColumns?: number;
  mdRows?: number;
  lgColumns?: number;
  lgRows?: number;
  xlColumns?: number;
  xlRows?: number;
  aspectRatio?: boolean;
  children?: React.ReactNode;
}

type GridProps<C extends React.ElementType> = GridOwnProps & {
  as?: C;
} & Omit<React.ComponentPropsWithRef<C>, keyof GridOwnProps | 'as'>;

export function Grid<C extends React.ElementType = 'div'>({
  children,
  columns = 1,
  smColumns,
  rows = 1,
  smRows,
  mdColumns,
  mdRows,
  lgColumns,
  lgRows,
  xlColumns,
  xlRows,
  aspectRatio,
  className,
  as,
  ...props
}: GridProps<C>): React.ReactElement {
  const Component = as || 'div';

  return (
    // @ts-expect-error could not solve as prop issue
    <Component
      data-grid-container=""
      data-grid-aspect-ratio={aspectRatio ? '' : undefined}
      className={cn(styles.container, className)}
      {...(props as React.ComponentPropsWithoutRef<C>)}
      style={
        {
          '--rows': rows,
          '--columns': columns,
          '--sm-columns': smColumns,
          '--sm-rows': smRows,
          '--md-columns': mdColumns,
          '--md-rows': mdRows,
          '--lg-columns': lgColumns,
          '--lg-rows': lgRows,
          '--xl-columns': xlColumns,
          '--xl-rows': xlRows,
          ...props.style,
        } as React.CSSProperties
      }
    >
      {['', 'sm', 'md', 'lg', 'xl'].map((size, index) => {
        const gridRows = [rows, smRows, mdRows, lgRows, xlRows][index] || rows;
        const gridColumns =
          [columns, smColumns, mdColumns, lgColumns, xlColumns][index] ||
          columns;

        return (
          <div
            key={size}
            aria-hidden="true"
            data-grid-guides=""
            className={styles.guides}
          >
            {Array.from({ length: gridRows * gridColumns }, (_, i) => {
              const x = (i % gridColumns) + 1;
              const y = Math.floor(i / gridColumns) + 1;
              return (
                <div
                  key={i}
                  data-grid-guide={size}
                  className={styles.guide}
                  style={{ '--x': x, '--y': y } as React.CSSProperties}
                />
              );
            })}
          </div>
        );
      })}
      {children}
    </Component>
  );
}

interface GridCellProps {
  row?: number | string;
  column?: number | string;
  smColumn?: number | string;
  smRow?: number | string;
  mdColumn?: number | string;
  mdRow?: number | string;
  lgColumn?: number | string;
  lgRow?: number | string;
  xlColumn?: number | string;
  xlRow?: number | string;
  children?: React.ReactNode;
  className?: string;
}

export function GridCell({
  children,
  row = 1,
  column = 1,
  smColumn,
  smRow,
  lgRow,
  mdColumn,
  mdRow,
  xlColumn,
  xlRow,
  lgColumn,
  className,
}: GridCellProps) {
  return (
    <div
      className={cn(styles.cell, className)}
      style={
        {
          '--row': row,
          '--column': column,
          '--sm-column': smColumn,
          '--sm-row': smRow,
          '--md-column': mdColumn,
          '--md-row': mdRow,
          '--lg-column': lgColumn,
          '--lg-row': lgRow,
          '--xl-column': xlColumn,
          '--xl-row': xlRow,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

interface GridCrossProps {
  row: number | string;
  column: number | string;
  smColumn?: number | string;
  smRow?: number | string;
  mdColumn?: number | string;
  mdRow?: number | string;
  lgColumn?: number | string;
  lgRow?: number | string;
  xlColumn?: number | string;
  xlRow?: number | string;
  className?: string;
}

export function GridCross({
  row,
  column,
  smColumn,
  smRow,
  mdColumn,
  mdRow,
  lgColumn,
  lgRow,
  xlColumn,
  xlRow,
  className,
}: GridCrossProps) {
  return (
    <div
      aria-hidden="true"
      data-grid-cross=""
      className={cn(styles.cross, className)}
      style={
        {
          '--cross-row': row,
          '--cross-column': column,
          '--sm-cross-column': smColumn,
          '--sm-cross-row': smRow,
          '--md-cross-column': mdColumn,
          '--md-cross-row': mdRow,
          '--lg-cross-column': lgColumn,
          '--lg-cross-row': lgRow,
          '--xl-cross-column': xlColumn,
          '--xl-cross-row': xlRow,
        } as React.CSSProperties
      }
    >
      <div
        data-grid-cross-line=""
        className={styles.crossLine}
        style={{
          width: 'var(--cross-half-size)',
          height: 'var(--cross-size)',
          borderRightWidth: 'var(--guide-width)',
        }}
      />
      <div
        data-grid-cross-line=""
        className={styles.crossLine}
        style={{
          width: 'var(--cross-size)',
          height: 'var(--cross-half-size)',
          borderBottomWidth: 'var(--guide-width)',
        }}
      />
    </div>
  );
}
