import { getProjectMembers } from '@/actions/project-member.action';
import React from 'react';
import { Users } from 'vercel-geist-icons';
import Link from 'next/link';
import { inviteMembersRoute } from '@/routes';
import ProjectMemberCard from '@/app/(dashboard)/dashboard/projects/[slug]/_components/project-member-card';

export default async function ProjectMemberList({
  project,
}: {
  project: Project;
}) {
  const data = await getProjectMembers(project.id);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between pr-3">
        <h3 className="text-sm font-medium flex items-center gap-2 leading-8">
          <Users />
          Members
          <span className="text-gray-900 text-xs">{data?.members?.length}</span>
        </h3>
      </div>
      <ul className="flex flex-col gap-3">
        {data?.members?.length > 0 ? (
          data?.members?.map((member: Member, index: number) => (
            <ProjectMemberCard key={index} member={member} />
          ))
        ) : (
          <p className="text-gray-900">
            No members found.{' '}
            <Link
              href={inviteMembersRoute(project.slug)}
              className="text-foreground font-medium hover:underline"
            >
              Invite members
            </Link>{' '}
            to <strong>{project.name}</strong>
          </p>
        )}
      </ul>
    </section>
  );
}
