import { cn } from '@/lib/utils';
import React from 'react';
import styles from './grid.module.css';

interface GridProps extends React.ComponentProps<'div'> {
  rows: number;
  columns: number;
  smColumns?: number;
  smRows?: number;
  mdColumns?: number;
  mdRows?: number;
  lgColumns?: number;
  lgRows?: number;
  xlColumns?: number;
  xlRows?: number;
  aspectRatio?: boolean;
  children?:
    | React.ReactElement<GridCellProps>
    | React.ReactElement<GridCellProps>[];
}

export function Grid({
  children,
  columns,
  smColumns,
  rows,
  smRows,
  mdColumns,
  mdRows,
  lgColumns,
  lgRows,
  xlColumns,
  xlRows,
  aspectRatio,
  className,
  ...props
}: GridProps) {
  return (
    <div
      data-grid-container=""
      data-grid-aspect-ratio={aspectRatio ? '' : null}
      className={cn(styles.container, className)}
      {...props}
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
        } as React.CSSProperties
      }
    >
      <div aria-hidden="true" data-grid-guides="" className={styles.guides}>
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <div
              key={index}
              data-grid-guide=""
              className={styles.guide}
              style={{ '--x': x, '--y': y } as React.CSSProperties}
            />
          );
        })}
      </div>

      <div aria-hidden="true" data-grid-guides="" className={styles.guides}>
        {Array.from(
          { length: (smRows || rows) * (smColumns || columns) },
          (_, index) => {
            // Calculate the x and y position of the cell
            const x = (index % (smColumns || columns)) + 1;
            const y = Math.floor(index / (smColumns || columns)) + 1;
            return (
              <div
                key={index}
                data-grid-guide="sm"
                className={styles.guide}
                style={{ '--x': x, '--y': y } as React.CSSProperties}
              />
            );
          },
        )}
      </div>

      <div aria-hidden="true" data-grid-guides="" className={styles.guides}>
        {Array.from(
          {
            length:
              (mdRows || smRows || rows) * (mdColumns || smColumns || columns),
          },
          (_, index) => {
            // Calculate the x and y position of the cell
            const x = (index % (mdColumns || smColumns || columns)) + 1;
            const y =
              Math.floor(index / (mdColumns || smColumns || columns)) + 1;
            return (
              <div
                key={index}
                data-grid-guide="md"
                className={styles.guide}
                style={{ '--x': x, '--y': y } as React.CSSProperties}
              />
            );
          },
        )}
      </div>
      <div aria-hidden="true" data-grid-guides="" className={styles.guides}>
        {Array.from(
          {
            length:
              (lgRows || mdRows || smRows || rows) *
              (lgColumns || mdColumns || smColumns || columns),
          },
          (_, index) => {
            // Calculate the x and y position of the cell
            const x =
              (index % (lgColumns || mdColumns || smColumns || columns)) + 1;
            const y =
              Math.floor(
                index / (lgColumns || mdColumns || smColumns || columns),
              ) + 1;
            return (
              <div
                key={index}
                data-grid-guide="lg"
                className={styles.guide}
                style={{ '--x': x, '--y': y } as React.CSSProperties}
              />
            );
          },
        )}
      </div>
      <div aria-hidden="true" data-grid-guides="" className={styles.guides}>
        {Array.from(
          {
            length:
              (xlRows || lgRows || mdRows || smRows || rows) *
              (xlColumns || lgColumns || mdColumns || smColumns || columns),
          },
          (_, index) => {
            // Calculate the x and y position of the cell
            const x =
              (index %
                (xlColumns || lgColumns || mdColumns || smColumns || columns)) +
              1;
            const y =
              Math.floor(
                index /
                  (xlColumns || lgColumns || mdColumns || smColumns || columns),
              ) + 1;
            return (
              <div
                key={index}
                data-grid-guide="xl"
                className={styles.guide}
                style={{ '--x': x, '--y': y } as React.CSSProperties}
              />
            );
          },
        )}
      </div>
      {children}
    </div>
  );
}

interface GridCellProps {
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
  children: React.ReactNode;
  className?: string;
}

export function GridCell({
  children,
  row,
  column,
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
