import { Grid, GridCell, GridCross } from '@/components/ui/grid';
import ChangelogsSection from '@/app/(landing)/features/_sections/features-section';

export default function FeaturesPage() {
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
            <h1 className="lg:text-5xl text-[2rem]">Features</h1>
          </div>
        </GridCell>
        <GridCell
          row="2 / span 2"
          column="12"
          className="bg-background-200 mb-px mr-px sm:block hidden"
        />
      </Grid>
      <ChangelogsSection />
    </div>
  );
}
