const experiences: ExperienceItemProps[] = [
  {
    name: "HTML",
    yearsOfExperience: 4,
  },
  {
    name: "CSS",
    yearsOfExperience: 4,
  },
  {
    name: "Javascript",
    yearsOfExperience: 4,
  },
  {
    name: "Accessibility",
    yearsOfExperience: 4,
  },
  {
    name: "React",
    yearsOfExperience: 3,
  },
  {
    name: "Sass",
    yearsOfExperience: 3,
  },
];

export const ExperiencesSection = () => {
  return (
    <section className="border-b pb-16">
      <ul className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {experiences.map((e) => (
          <ExperienceItem {...e} />
        ))}
      </ul>
    </section>
  );
};

type ExperienceItemProps = {
  name: string;
  yearsOfExperience: number;
};
const ExperienceItem = ({ name, yearsOfExperience }: ExperienceItemProps) => {
  return (
    <li className="flex flex-col text-center sm:gap-2 sm:text-start">
      <span className="text-3xl font-bold text-white sm:text-5xl">{name}</span>
      <span className="text-opp-grey sm:text-lg">
        {yearsOfExperience} years experience
      </span>
    </li>
  );
};
