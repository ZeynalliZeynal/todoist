import { create } from 'zustand';

interface ProjectStore {
  project?: Project;
  setProject: (project: Project | undefined) => void;
}

export const useProjectStore = create<ProjectStore>()((set) => ({
  project: undefined,
  setProject: (project) => set({ project }),
}));
