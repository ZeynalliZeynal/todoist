import { Grid, GridCell, GridCross } from '@/components/ui/grid';

export default function PricingPage() {
  return (
    <div className="py-8">
      <Grid as="section" rows={4} columns={8} smColumns={12} className="h-auto">
        <GridCross column={1} row={1} />
        <GridCross column={-1} row={-1} />
        <GridCell
          row="2 / span 2"
          column="1"
          className="bg-background-200 mb-px mr-px sm:block hidden"
        />
        <GridCell
          row="2 / span 2"
          column="1 / span 12"
          smColumn="2 / span 10"
          className="mr-px mb-px"
        >
          <div className="size-full flex-col center gap-4 bg-background-200 lg:p-12 md:p-8 p-6 text-center">
            <h1 className="lg:text-5xl text-[2rem]">
              Find a plan to organize your life.
            </h1>
            <p className="text-gray-900 text-xl">
              From daily tasks to complex projects, our plans scale with your
              productivity.
            </p>
          </div>
        </GridCell>
        <GridCell
          row="2 / span 2"
          column="12"
          className="bg-background-200 mb-px mr-px sm:block hidden"
        />
      </Grid>
      <Grid as="section" columns={3} className="border-y-transparent">
        <GridCell>
          <div className="py-12 px-8 flex flex-col gap-2">asa</div>
        </GridCell>
      </Grid>
      <Grid className="h-4" />
    </div>
  );
}
