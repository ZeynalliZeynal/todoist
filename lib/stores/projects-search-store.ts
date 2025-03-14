import { create } from 'zustand';

interface ProjectsSearchStoreProps {
  search: string;
  debouncedSearch: string;

  setSearch: (search: string) => void;
  setDebouncedSearch: (search: string) => void;
}

export const useProjectsSearchStore = create<ProjectsSearchStoreProps>(
  (setState) => ({
    search: '',
    debouncedSearch: '',

    setSearch: (search: string) => {
      setState({ search });
    },
    setDebouncedSearch: (debouncedSearch: string) => {
      setState({ debouncedSearch });
    },
  }),
);
