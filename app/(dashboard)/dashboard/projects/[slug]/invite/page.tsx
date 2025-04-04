import { getMembers } from '@/actions/member.action';
import EmptyState from '@/components/ui/empty-state';
import { User } from 'vercel-geist-icons';
import MemberCard from '@/app/(dashboard)/dashboard/projects/[slug]/invite/_components/member-card';

export default async function ProjectMembersPage() {
  const members = await getMembers();

  console.log(members);
  return (
    <section>
      <div className="space-y-3">
        <div className="space-y-2">
          <h2 className="font-medium">Users open to memberships</h2>
          <p className="text-gray-900 text-base">
            Invite members to your project.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {members.members?.length > 0 ? (
            members.members.map((member: Member) => (
              <MemberCard member={member} key={member.id} />
            ))
          ) : (
            <EmptyState icon={<User />} title="No member found to invite." />
          )}
        </div>
      </div>
    </section>
  );
}
