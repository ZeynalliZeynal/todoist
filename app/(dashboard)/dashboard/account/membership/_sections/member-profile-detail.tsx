import {
  activateMembershipProfile,
  deactivateMembershipProfile,
} from '@/actions/member.action';
import { Switch } from '@/components/ui/switch';
import { motion } from 'framer-motion';
import { useOptimistic, useTransition } from 'react';
import { toast } from 'sonner';

export default function MemberProfileDetail({ profile }: { profile: Member }) {
  const [, startTransition] = useTransition();
  const [optimisticValue, optimisticChangeValue] = useOptimistic(
    profile.activated,
    (state) => !state
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        position: 'absolute',
      }}
      exit={{
        opacity: 0,
        position: 'absolute',
      }}
      animate={{
        opacity: 1,
        position: 'relative',
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative divide-y z-[1] w-full space-y-3"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl leading-10">Status</h2>
          <p className="text-gray-900">
            Activate or deactivate your membership status. When deactivated, you no longer get invitations from others or join as a member. 
          </p>
        </div>
        <Switch
          checked={optimisticValue}
          size={48}
          onChange={() =>
            startTransition(async () => {
              const nextValue = !optimisticValue;
              optimisticChangeValue(nextValue);

              if (optimisticValue) {
                toast.success('Your membership is deactivated');
                await deactivateMembershipProfile();
              } else {
                toast.success('Your membership is activated');
                await activateMembershipProfile();
              }
            })
          }
        />
      </div>
      <div className="space-y-2 py-3">
        <h3 className="text-lg">Memberships</h3>
        <p className="text-gray-900 leaidng-6">Manage your memberships here.</p>
      </div>
    </motion.div>
  );
}
