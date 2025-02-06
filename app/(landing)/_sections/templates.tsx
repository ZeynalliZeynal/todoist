import { Button } from '@/components/ui/button';
import { LuMoveRight } from 'react-icons/lu';
import { Suspense } from 'react';
import TemplateData from '@/app/(landing)/_sections/template-data';
import EmptyState from '@/components/ui/empty-state';
import Spinner from '@/components/ui/spinner';

export default function Templates() {
  return (
    <section className="mt-4 border-t">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:border-r border-b lg:w-1/3 flex flex-col">
          <div className="lg:p-12 p-8 flex flex-col lg:text-start lg:items-start text-center items-center gap-6">
            <h2 className="lg:text-4xl md:text-[2rem] leading-[120%]">
              Kickstart your next project with Todoist Templates
            </h2>
            <p>
              No need to create projects or setups from scratch when we have 50+
              templates made for you.
            </p>
            <Button
              suffix={<LuMoveRight />}
              size="lg"
              className="rounded-full w-fit"
            >
              See all
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <Suspense
            fallback={
              <EmptyState title="Loading templates..." icon={<Spinner />} />
            }
          >
            <TemplateData />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
