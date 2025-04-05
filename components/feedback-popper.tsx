'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Message, PaperAirplane } from 'vercel-geist-icons';
import { useOutsideClick } from '@/hooks/use-ui';
import { Button } from '@/components/ui/button';
import { Editor } from '@/components/ui/editor';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import ReactFocusLock from 'react-focus-lock';

export default function FeedbackPopper() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const ref = useOutsideClick({
    action: () => {
      setOpen(false);
      setContent('');
    },
  });

  return (
    <ReactFocusLock disabled={!open}>
      <TooltipProvider delayDuration={0}>
        <motion.div
          ref={ref}
          className="fixed bg-background-100 z-50 bottom-4 right-4 overflow-hidden border rounded-lg"
          variants={{
            expand: {
              width: '40vw',
              height: '50vh',
            },
            initial: {
              width: 34,
              height: 34,
            },
          }}
          animate={open ? 'expand' : 'initial'}
        >
          <AnimatePresence>
            {open && (
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
                <div className="border-b p-3 shrink-0">
                  <p>Give a feedback!</p>
                </div>
                <div className="overflow-auto flex-grow">
                  <Editor content={content} onChange={setContent} />
                </div>
                <div className="border-t bg-background-200 p-3 shrink-0">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="ml-auto"
                    suffix={<PaperAirplane />}
                  >
                    Send
                  </Button>
                </div>
              </motion.div>
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
