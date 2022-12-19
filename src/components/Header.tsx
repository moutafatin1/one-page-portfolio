import { FronendmentorIcon } from "../components/icons/FronendmentorIcon";
import { GithubIcon } from "../components/icons/GithubIcon";
import { LinkedinIcon } from "../components/icons/LinkedinIcon";
import { TwitterIcon } from "../components/icons/TwitterIcon";

export const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={`flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ${className}`}
    >
      <span className="text-2xl font-bold text-white sm:text-3xl">
        adamkeyes
      </span>
      <div className="flex items-center gap-4 sm:gap-8">
        <GithubIcon className="cursor-pointer  text-white transition-colors hover:text-opp-green" />
        <FronendmentorIcon className="cursor-pointer text-white transition-colors hover:text-opp-green" />
        <LinkedinIcon className="cursor-pointer text-white transition-colors hover:text-opp-green" />
        <TwitterIcon className="cursor-pointer text-white transition-colors hover:text-opp-green" />
      </div>
    </header>
  );
};
