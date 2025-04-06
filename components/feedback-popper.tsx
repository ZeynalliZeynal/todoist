'use client';

import { Button } from '@/components/ui/button';
import { Editor, extractTextFromHtml } from '@/components/ui/editor';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useOutsideClick } from '@/hooks/use-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import {
  Fullscreen,
  FullscreenClose,
  Message,
  PaperAirplane,
} from 'vercel-geist-icons';
import { z } from 'zod';
import StarRating from './ui/star-rating';
import { sendFeedback } from '@/actions/feedback.action';
import { toast } from 'sonner';
import { useProfile } from '@/lib/providers/user-provider';
import LoadingDots from './ui/loading-dots';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function FeedbackPopper() {
  const { profile } = useProfile();
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmExit, setConfirmExit] = useState(true);

  const form = useForm({
    defaultValues: {
      content: '',
      rating: 0,
      page: undefined,
    },
    resolver: zodResolver(
      z.object({
        content: z.string().min(1, 'Content is required'),
        rating: z.number().min(1, 'Rating is required'),
        page: z.string().optional(),
      }),
    ),
  });

  function closePopper(force?: boolean): void {
    if (!force && extractTextFromHtml(form.watch('content')).length > 0) {
      setConfirmOpen(true);
      return;
    } else {
      form.reset();
      setFullscreen(false);
      setOpen(false);
    }
  }

  const ref = useOutsideClick({
    action: closePopper,
  });

  if (!profile) return null;

  return (
    <ReactFocusLock disabled={!open}>
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader className="p-6">
            <AlertDialogTitle className="text-xl">
              Are you sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-900">
              You are going to lose your content. Do you want to discard your
              changes?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button size="md">Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                size="md"
                variant="secondary"
                onClick={() => closePopper(true)}
              >
                Discard
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <TooltipProvider delayDuration={0}>
        <motion.div
          ref={ref}
          className="fixed bg-background-100 z-50 bottom-4 right-4 *:size-full overflow-hidden border rounded-lg"
          variants={{
            fullscreen: {
              width: 'calc(100vw - 2rem)',
              height: 'calc(100vh - 2rem)',
            },
            expand: {
              width: '50vw',
              height: '50vh',
            },
            initial: {
              width: 34,
              height: 34,
            },
          }}
          animate={open ? (fullscreen ? 'fullscreen' : 'expand') : 'initial'}
        >
          <AnimatePresence>
            {open && (
              <FormProvider {...form}>
                <form
                  onSubmit={form.handleSubmit(async (fieldValues) => {
                    const response = await sendFeedback(fieldValues);
                    if (response.status === 'fail') {
                      toast.error(response.message);
                    } else {
                      toast.success(response.message);
                      form.reset();
                      setOpen(false);
                    }
                  })}
                >
                  <FeedbackEditor
                    fullscreen={fullscreen}
                    setFullscreen={setFullscreen}
                  />
                </form>
              </FormProvider>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!open && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    animate={{
                      opacity: 1,
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="size-8 center absolute bottom-0 right-0 z-50 rounded-lg bg-background-100 hover:bg-gray-200 transition"
                    onClick={() => setOpen(true)}
                  >
                    <Message />
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="left">Open the editor</TooltipContent>
              </Tooltip>
            )}
          </AnimatePresence>
        </motion.div>
      </TooltipProvider>
    </ReactFocusLock>
  );
}

function FeedbackEditor({
  fullscreen,
  setFullscreen,
}: {
  fullscreen: boolean;
  setFullscreen: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useFormContext<{
    content: string;
    rating: number;
    page?: string;
  }>();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex flex-col h-full"
    >
      <div className="flex items-center justify-between border-b p-3 shrink-0">
        <div>
          <p>Give a feedback!</p>
          <p className="text-gray-900 text-xs">
            Maybe you got some interesting ideas on your mind or you just want
            to say &quot;Hello&quot;? 🤔
          </p>
        </div>
        <Button
          onClick={() => setFullscreen((prevState) => !prevState)}
          iconOnly
          variant="tertiary"
          title={!fullscreen ? 'Expand' : 'Collapse'}
          aria-label={!fullscreen ? 'Expand' : 'Collapse'}
        >
          {fullscreen ? <FullscreenClose /> : <Fullscreen />}
        </Button>
      </div>
      <div className="overflow-auto flex-grow">
        <Editor
          content={form.watch('content')}
          onChange={(value) => form.setValue('content', value)}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <StarRating
                value={form.watch('rating')}
                onValueChange={(value) =>
                  form.setValue('rating', Number(value))
                }
                className="text-sm"
              />
            </TooltipTrigger>
            <TooltipContent>Rate your experience</TooltipContent>
          </Tooltip>
          <span className="inline-block text-gray-900 ml-auto">
            {extractTextFromHtml(form.watch('content')).length}
          </span>
        </Editor>
      </div>
      <div className="border-t bg-background-200 p-3 shrink-0">
        <Button
          size="sm"
          type="submit"
          variant="secondary"
          className="ml-auto"
          disabled={
            !form.watch('content') ||
            !form.watch('rating') ||
            form.formState.isSubmitting
          }
          suffix={
            form.formState.isSubmitting ? (
              <LoadingDots size="small" />
            ) : (
              <PaperAirplane />
            )
          }
        >
          Send
        </Button>
      </div>
    </motion.div>
  );
}
