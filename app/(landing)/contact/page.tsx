import { Grid, GridCell, GridCross } from '@/components/ui/grid/grid';

export default function ContactPage() {
  return (
    <>
      <section className="py-[90px]">
        <Grid
          rows={2}
          columns={12}
          className="[&_[data-grid-guides]]:border-x-transparent"
        >
          <GridCross column={1} row={1} />
          <GridCross column={-1} row={-1} />
          <GridCell row="span 2" column="4 / span 6">
            <div className="size-full center rounded-full border bg-background-100">
              <h1 className="text-[clamp(24px,5vw,72px)]">Contact us.</h1>
            </div>
          </GridCell>
        </Grid>
      </section>
    </>
  );
}
