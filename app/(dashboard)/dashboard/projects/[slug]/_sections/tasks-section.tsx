'use client';

import AddTaskButton from '@/app/(dashboard)/dashboard/projects/[slug]/_components/add-task-button';
import TaskCard from '@/app/(dashboard)/dashboard/projects/[slug]/_components/task-card';
import { useOptimistic } from 'react';

export default function TasksSection({
  tasks,
  tags,
  project,
}: {
  tasks: Task[];
  tags: TaskTag[];
  project: Project;
}) {
  const [optimisticTasks, optimisticComplete] = useOptimistic(
    tasks,
    (state, taskId) => state.filter((task) => task.id !== taskId),
  );

  return (
    <section className="max-w-screen-dashboard mx-auto px-6">
      <div className="grid grid-cols-4 mt-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <span className="relative inline-block rounded border border-gray-500 font-geist-mono size-6">
                <span className="absolute text-[10px] inset-0 center flex-col">
                  <span className="inline-block w-3/4 h-px bg-gray-500 absolute top-1 mx-auto" />
                  <span className="absolute top-1">{new Date().getDate()}</span>
                </span>
              </span>
              Today
            </h3>
            <AddTaskButton project={project} tags={tags} />
          </div>
          <div className="flex flex-col-reverse gap-3" data-tasks-container="">
            <div className="space-y-3">
              {optimisticTasks.length > 0 ? (
                optimisticTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onComplete={optimisticComplete}
                  />
                ))
              ) : (
                <div className="text-gray-900">No task found for today.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
