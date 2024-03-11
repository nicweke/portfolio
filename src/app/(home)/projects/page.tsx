import { Header } from "@/components/header";
import Projects from "@/components/projects";
import { client } from "@/lib/sanity";
import { projectsQuery } from "@/utils/querys";
import type { Projects as ProjectsType } from "@/app/types/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Here you can see my latest projects and what technologies they are made with",
};

const ProjectsPage = async () => {
  const projects = (await client.fetch<ProjectsType[]>(projectsQuery)) ?? [];
  console.log(projects);
  return (
    <section>
      <Header
        page
        title="Projects"
        description="You can view my most recent work here."
      />
      <Projects projects={projects} />
    </section>
  );
};

export default ProjectsPage;
