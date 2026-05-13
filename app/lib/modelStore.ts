import { create } from "zustand";
import { persist } from "zustand/middleware";

type Dimensions = {
  width: number;
  height: number;
  depth: number;
  volume: number;
};

type Project = {
  id: number;
  fileName: string;
  fileUrl: string;
};

type ModelState = {
  dimensions: Dimensions;

  projects: Project[];

  setDimensions: (dims: Dimensions) => void;

  addProject: (project: Project) => void;

  removeProject: (id: number) => void;

  clearProjects: () => void;
};

export const useModelStore = create<ModelState>()(
  persist(
    (set) => ({
      dimensions: {
        width: 0,
        height: 0,
        depth: 0,
        volume: 0,
      },

      projects: [],

      setDimensions: (dims) =>
        set({
          dimensions: dims,
        }),

      addProject: (project) =>
        set((state) => ({
          projects: [...state.projects, project],
        })),

      removeProject: (id) =>
        set((state) => ({
          projects: state.projects.filter(
            (project) => project.id !== id
          ),
        })),

      clearProjects: () =>
        set({
          projects: [],
        }),
    }),

    {
      name: "novaforge-project-storage",
    }
  )
);