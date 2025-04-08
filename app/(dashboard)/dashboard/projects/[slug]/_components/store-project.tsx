'use client';

import { useProjectStore } from '@/lib/stores/project-store';
import { useEffect } from 'react';

export default function StoreProject({ project }: { project?: Project }) {
  const { setProject } = useProjectStore();

  useEffect(() => {
    if (project) setProject(project);
  }, [project, setProject]);

  return null;
}
