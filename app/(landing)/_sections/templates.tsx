import Button from '@/components/ui/button';
import { LuMoveRight } from 'react-icons/lu';
import { Suspense } from 'react';
import TemplateData from '@/app/(landing)/_sections/template-data';

export default function Templates() {
  return (
    <section className="mt-4 border-t">
      <div className="flex">
        <div className="border-r w-1/3 flex flex-col justify-center">
          <div className="p-12 space-y-6">
            <h2 className="text-4xl leading-[120%]">
              Kickstart your next project with Todoist Templates
            </h2>
            <p>
              No need to create projects or setups from scratch when we have 50+
              templates made for you.
            </p>
            <Button
              suffix={<LuMoveRight />}
              size="lg"
              className="rounded-full mx-auto"
            >
              See all
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <Suspense fallback={<p>loading...</p>}>
            <TemplateData />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
