import project1Large from "../../assets/images/thumbnail-project-1-large.webp";
import project1Small from "../../assets/images/thumbnail-project-1-small.webp";
import project2Large from "../../assets/images/thumbnail-project-2-large.webp";
import project2Small from "../../assets/images/thumbnail-project-2-small.webp";
import project3Large from "../../assets/images/thumbnail-project-3-large.webp";
import project3Small from "../../assets/images/thumbnail-project-3-small.webp";
import project4Large from "../../assets/images/thumbnail-project-4-large.webp";
import project4Small from "../../assets/images/thumbnail-project-4-small.webp";
import project5Large from "../../assets/images/thumbnail-project-5-large.webp";
import project5Small from "../../assets/images/thumbnail-project-5-small.webp";
import project6Large from "../../assets/images/thumbnail-project-6-large.webp";
import project6Small from "../../assets/images/thumbnail-project-6-small.webp";

export type Project = {
  name: string;
  tech: string[];
  liveSite: string;
  repo: string;
  imgSmall: string;
  imgLarge: string;
};
export const projects = [
  {
    name: "Design portfolio",
    tech: ["HTML", "CSS"],
    liveSite: "#",
    repo: "#",
    imgSmall: project1Small,
    imgLarge: project1Large,
  },
  {
    name: "E-learning landing page",
    tech: ["HTML", "CSS"],
    liveSite: "#",
    repo: "#",
    imgSmall: project2Small,
    imgLarge: project2Large,
  },
  {
    name: "Todo web app",
    tech: ["HTML", "CSS", "JavaScript"],
    liveSite: "#",
    repo: "#",
    imgSmall: project3Small,
    imgLarge: project3Large,
  },
  {
    name: "Entertainment web app",
    tech: ["HTML", "CSS", "JavaScript"],
    liveSite: "#",
    repo: "#",
    imgSmall: project4Small,
    imgLarge: project4Large,
  },
  {
    name: "Memory Game",
    tech: ["HTML", "CSS", "JavaScript"],
    liveSite: "#",
    repo: "#",
    imgSmall: project5Small,
    imgLarge: project5Large,
  },
  {
    name: "Art gallery",
    tech: ["HTML", "CSS", "JavaScript"],
    liveSite: "#",
    repo: "#",
    imgSmall: project6Small,
    imgLarge: project6Large,
  },
];

export default projects;
