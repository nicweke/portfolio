import ProjectsCard from "@/components/projects-card";

import type { Projects, Projects as ProjectsType } from "@/app/types/sanity";
import { FC } from "react";

interface ProjectsProps {
  projects: ProjectsType[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <ProjectsCard projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
