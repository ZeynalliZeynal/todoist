import { Grid, GridCell, GridCross } from '@/components/ui/grid';
import { getPlans } from '@/actions/plan.action';
import { formatCurrency } from '@/utils/currrency';
import { CheckCircleFill } from 'vercel-geist-icons';
import Badge from '@/components/ui/badge';

export default async function PricingPage() {
  const data = await getPlans();
  const plans: Plan[] = data.plans;
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
      <Grid
        as="section"
        columns={1}
        mdColumns={3}
        className="border-y-transparent"
      >
        {plans?.map((plan, index) => (
          <GridCell row="auto" key={index} column="auto">
            {plan.status === 'coming soon' && (
              <div className="absolute !hidden md:!flex -top-8 -left-px px-3 h-8 center rounded-tr-xl bg-foreground text-background-200 font-medium capitalize">
                {plan.status}
              </div>
            )}
            <div className="border-r border-b py-12 px-8 size-full flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-semibold flex items-center gap-3">
                  {plan.name}{' '}
                  {plan.status === 'coming soon' && (
                    <Badge variant="inverted" className="capitalize">
                      {plan.status}
                    </Badge>
                  )}
                </div>
                <p className="text-gray-900 font-medium text-base">
                  {plan.description}.{' '}
                  <b className="text-foreground">
                    {plan.price === 0
                      ? 'Free forever.'
                      : `${formatCurrency(plan.price)}/month`}
                  </b>
                </p>
              </div>
              <ul className="flex flex-col gap-3 max-h-[450px] overflow-y-auto">
                {plan?.allFeatures?.map((f) => (
                  <li
                    key={f.id}
                    className="text-gray-900 flex items-center gap-2"
                  >
                    <CheckCircleFill className="text-foreground shrink-0" />
                    {f.name}
                  </li>
                ))}
              </ul>
            </div>
          </GridCell>
        ))}
      </Grid>
    </div>
  );
}
