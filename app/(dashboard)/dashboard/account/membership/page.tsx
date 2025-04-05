import { Metadata } from 'next';
import CreateMembershipProfileSection from '@/app/(dashboard)/dashboard/account/membership/_sections/create-membership-profile-section';
import { getMembershipProfile } from '@/actions/member.action';

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Update your membership profile here.',
};

export default async function MembershipPage() {
  const data = await getMembershipProfile();
  return (
    <>
      <CreateMembershipProfileSection profile={data?.profile} />
    </>
  );
}
