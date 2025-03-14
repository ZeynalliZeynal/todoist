import { GoCheckCircleFill, GoCircle } from 'react-icons/go';
import Badge from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Dispatch, SetStateAction } from 'react';
import { Pages } from '@/components/auth/signup-form';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function SignupSelectPlans({
  plans = [],
  selected,
  onPlanSelect,
  name,
  onNameChange,
  onPageChange,
}: {
  plans: Plan[];
  selected: string;
  onPlanSelect: Dispatch<SetStateAction<string>>;
  name: string;
  onNameChange: Dispatch<SetStateAction<string>>;
  onPageChange: Dispatch<SetStateAction<Pages>>;
}) {
  return (
    <>
      <form
        className="px-20 pt-16 pb-12"
        onSubmit={(event) => {
          event.preventDefault();
          if (!name || !selected) return;
          onPageChange('form');
        }}
      >
        <section className="h-full flex flex-col justify-center gap-8 w-full opacity-0 animate-fade-in delay-100">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl">
              Your first step to staying organized is just a sign-up away.
            </h1>
          </div>
          <div className="text-gray-900 flex flex-col gap-2">
            <p className="text-paragraph">Plan type</p>
            <ul className="flex-col border rounded-md overflow-hidden divide-y">
              <TooltipProvider>
                {plans.map((plan) => (
                  <Tooltip key={plan.id}>
                    <TooltipTrigger disabled={plan.status === 'active'} asChild>
                      <li>
                        <button
                          type="button"
                          aria-label={plan.name}
                          aria-disabled={plan.status !== 'active'}
                          disabled={plan.status !== 'active'}
                          data-selected={plan.name === selected ? '' : null}
                          className="p-2 w-full flex items-center gap-1.5 hover:bg-background-200 transition-colors data-[selected]:text-foreground disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-transparent"
                          onClick={() =>
                            selected === plan.name && plan.status === 'active'
                              ? onPlanSelect('')
                              : onPlanSelect(plan.name)
                          }
                        >
                          {selected === plan.name ? (
                            <GoCheckCircleFill
                              size={16}
                              className="text-blue-900"
                            />
                          ) : (
                            <GoCircle size={16} />
                          )}
                          {plan.name === 'Beginner'
                            ? 'I need to organize my life'
                            : plan.name === 'Pro'
                              ? 'I need to organize my work and life'
                              : 'I need to manage my teamwork as well'}

                          <Badge
                            variant={
                              plan.name === 'Beginner'
                                ? 'gray'
                                : plan.name === 'Pro'
                                  ? 'blue'
                                  : 'amber'
                            }
                            className="ml-auto"
                          >
                            {plan.name}
                          </Badge>
                        </button>
                      </li>
                    </TooltipTrigger>
                    {plan.status !== 'active' && (
                      <TooltipContent
                        side="right"
                        // variant={
                        //   plan.status === 'disabled'
                        //     ? 'gray-subtle'
                        //     : 'amber-subtle'
                        // }
                      >
                        {plan.status}
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </TooltipProvider>
            </ul>
            <div className="pt-8 flex flex-col gap-4">
              {selected && (
                <Input
                  type="text"
                  name="name"
                  label="Your Name"
                  size="medium"
                  autoFocus
                  required
                  value={name}
                  onChange={({ target }) => onNameChange(target.value)}
                />
              )}
              <Button
                type="submit"
                size="md"
                disabled={!name || !selected}
                variant="secondary"
                className="w-full"
              >
                Continue
              </Button>
            </div>
          </div>
        </section>
      </form>
      <div className="text-center text-gray-900 text-paragraph gap-1 px-4 py-2 m-3 h-12 flex items-center justify-center opacity-0 animate-fade-in delay-500">
        By joining, you agree to our
        <Link href="#" className="text-foreground">
          <strong className="font-normal">Terms of Service</strong>
        </Link>
        and
        <Link href="#" className="text-foreground">
          <strong className="font-normal">Privacy Policy</strong>
        </Link>
      </div>
      <Link
        href="/"
        className="text-center rounded-md text-purple-900 bg-purple-200 gap-1.5 px-4 py-2 m-3 h-12 flex items-center justify-center opacity-0 animate-fade-in delay-500"
      >
        Have a complex company use case? Get Enterprise grade assistance
        <FiArrowRightCircle size={16} />
      </Link>
    </>
  );
}
