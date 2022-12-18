import { ProjectCard } from "./ProjectCard";
import projects from "./projects";

export const ProjectSection = () => {
  return (
    <section className="my-8">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          Projects
        </h2>
        <a
          href="#"
          className="text-lg font-medium uppercase text-white underline decoration-opp-green underline-offset-[16px] transition-colors hover:text-opp-green md:text-xl"
        >
          contact me
        </a>
      </div>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.repo} project={project} />
        ))}
      </ul>
    </section>
  );
};
