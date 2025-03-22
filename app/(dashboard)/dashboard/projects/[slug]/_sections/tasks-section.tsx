'use client';

import AddTaskButton from '@/app/(dashboard)/dashboard/projects/[slug]/_components/add-task-button';
import TaskCard from '@/app/(dashboard)/dashboard/projects/[slug]/_components/task-card';
import { isToday } from 'date-fns';
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
  const overdueTasks = tasks.filter(
    (task) => new Date(task.dueDate) < new Date()
  );

  const todayTasks = tasks.filter(
    (task) => isToday(task.createdAt) && new Date(task.dueDate) > new Date()
  );

  const [optimisticTodayTasks, optimisticTodayTaskRemove] = useOptimistic(
    todayTasks,
    (state, taskId) => state.filter((task) => task.id !== taskId)
  );

  const [optimisticOverdueTasks, optimisticOverdueTaskRemove] = useOptimistic(
    overdueTasks,
    (state, taskId) => state.filter((task) => task.id !== taskId)
  );

  return (
    <section className="max-w-screen-dashboard mx-auto px-6">
      <div className="grid grid-cols-4 gap-4 mt-6">
        {overdueTasks.length > 0 && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2 leading-8">
                {/* <span className="relative inline-block rounded border border-gray-500 font-geist-mono size-6">
                <span className="absolute text-[10px] inset-0 center flex-col">
                  <span className="inline-block w-3/4 h-px bg-gray-500 absolute top-1 mx-auto" />
                  <span className="absolute top-1">{new Date().getDate()}</span>
                </span>
              </span> */}
                Overdue{' '}
                <span className="text-gray-900 text-xs">
                  {optimisticOverdueTasks.length}
                </span>
              </h3>
              {/* <AddTaskButton project={project} tags={tags} /> */}
            </div>
            <div
              className="flex flex-col-reverse gap-3 max-h-dvh overflow-auto"
              data-tasks-container=""
            >
              <div className="space-y-3">
                {overdueTasks.length > 0 ? (
                  overdueTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      onDelete={optimisticOverdueTaskRemove}
                      task={task}
                      onComplete={optimisticOverdueTaskRemove}
                    />
                  ))
                ) : (
                  <div className="text-gray-900">No task found for today.</div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <span className="relative inline-block rounded border border-gray-500 font-geist-mono size-6">
                <span className="absolute text-[10px] inset-0 center flex-col">
                  <span className="inline-block w-3/4 h-px bg-gray-500 absolute top-1 mx-auto" />
                  <span className="absolute top-1">{new Date().getDate()}</span>
                </span>
              </span>
              Today{' '}
              <span className="text-gray-900 text-xs">
                {optimisticTodayTasks.length}
              </span>
            </h3>
            <AddTaskButton project={project} tags={tags} />
          </div>
          <div
            className="flex flex-col-reverse gap-3 max-h-dvh overflow-auto pr-3"
            data-tasks-container=""
          >
            <div className="space-y-3">
              {optimisticTodayTasks.length > 0 ? (
                optimisticTodayTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    onDelete={optimisticTodayTaskRemove}
                    task={task}
                    onComplete={optimisticTodayTaskRemove}
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
