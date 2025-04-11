'use client';

import { Canvas } from '@react-three/fiber';
import WavesMesh from '@/components/waves-mesh';
import { Button } from '@/components/ui/button';

import { AnimatePresence, motion } from 'framer-motion';
import { useTransition } from 'react';
import LoadingDots from '@/components/ui/loading-dots';
import { createMembershipProfile } from '@/actions/member.action';
import MemberProfileDetail from './member-profile-detail';

export default function CreateMembershipProfileSection({
  profile,
}: {
  profile?: Member;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <section className="h-[90vh] relative p-4 rounded-xl border bg-background-100 overflow-auto">
      <AnimatePresence>
        {profile && <MemberProfileDetail profile={profile} />}
      </AnimatePresence>
      <AnimatePresence>
        {!profile && (
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
            transition={{
              duration: 0.5,
            }}
          >
            <div className="absolute inset-0 z-0">
              <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
                <WavesMesh speed={1} intensity={0.3} />
              </Canvas>
            </div>
            <div className="relative font-geist-mono flex flex-col gap-5 z-[1] justify-center items-center h-full">
              <div className="rounded-lg gap-5 flex items-center flex-col px-4 py-8 w-full">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="text-5xl font-bold mix-blend-difference"
                >
                  Membership
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="text-lg mix-blend-difference"
                >
                  Create your membership profile to get invites or to join to
                  others.
                </motion.p>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.6,
                  }}
                  className=""
                >
                  <p>How it works?</p>
                  <ul className="list-disc list-inside">
                    <li>Once created, it cannot be deleted (yet).</li>
                    <li>
                      You will be able to send join request to projects or other
                      entities (only project is available for now) which they
                      can reject or approve.
                    </li>
                    <li>
                      You will be able to get invitations from entity owners
                      which you can reject or approve.
                    </li>
                    <li>
                      You can activate or deactivate the membership. The default
                      is active; when deactivated, you will no longer get
                      invitations or be able to join as member.
                    </li>
                  </ul>
                  <Button
                    className="mx-auto mt-5"
                    onClick={() =>
                      startTransition(async () => {
                        await createMembershipProfile();
                      })
                    }
                    disabled={isPending}
                    suffix={isPending && <LoadingDots size="small" />}
                  >
                    {isPending ? 'Creating' : 'Create profile'}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
