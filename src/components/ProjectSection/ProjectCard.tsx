import { Project } from "./projects";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className="">
      <picture>
        <source srcSet={project.imgLarge} media="(min-width: 1024px)" />
        <img src={project.imgSmall} alt={project.name} />
      </picture>
      <h3 className="mt-4 mb-2 text-2xl font-bold uppercase text-white">
        {project.name}
      </h3>
      <ul className="flex items-center gap-4">
        {project.tech.map((t) => (
          <li key={t} className="text-lg font-medium uppercase text-opp-grey">
            {t}
          </li>
        ))}
      </ul>
      <span className="mt-4 flex items-center gap-4">
        <a
          href={project.liveSite}
          className="border-b-2 border-opp-green pb-2 text-lg font-medium uppercase text-white transition-colors hover:text-opp-green"
        >
          view project
        </a>
        <a
          href={project.repo}
          className="border-b-2 border-opp-green pb-2 text-lg font-medium uppercase text-white transition-colors hover:text-opp-green"
        >
          view code
        </a>
      </span>
    </li>
  );
};
