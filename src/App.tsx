import ProfileDesktop from "./assets/images/image-profile-desktop.webp";
import ProfileMobile from "./assets/images/image-profile-mobile.webp";
import ProfileTablet from "./assets/images/image-profile-tablet.webp";
import { PatternCircle } from "./components/common/PatternCircle";
import { PatternRings } from "./components/common/PatternRings";

import { FronendmentorIcon } from "./components/icons/FronendmentorIcon";
import { GithubIcon } from "./components/icons/GithubIcon";
import { LinkedinIcon } from "./components/icons/LinkedinIcon";
import { TwitterIcon } from "./components/icons/TwitterIcon";

const App = () => {
  return (
    <main className="relative mx-auto max-w-5xl">
      <header className="mx-8 flex flex-col items-center justify-between gap-6 py-4 sm:flex-row">
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

      <section className="mx-8 mt-80 border-b pb-16 sm:mt-32 lg:pb-56">
        <PatternCircle className="absolute -right-16 top-1/4 sm:top-[50%]" />
        <PatternRings className="absolute -left-80 top-32 -z-10" />
        <picture>
          <source media="(min-width: 1024px)" srcSet={ProfileDesktop} />
          <source media="(min-width: 640px)" srcSet={ProfileTablet} />
          <img
            src={ProfileMobile}
            alt="profile pic"
            className="absolute left-1/2 top-0 -z-10  max-w-[180px] -translate-x-1/2 sm:right-0 sm:left-auto sm:max-w-xs sm:translate-x-0 lg:max-w-md"
          />
        </picture>
        <div className="space-y-8 text-center sm:max-w-md sm:text-left lg:max-w-2xl lg:space-y-16">
          <h1 className="text-5xl font-bold text-white sm:text-7xl ">
            Nice to meet you! I'm{" "}
            <span className="underline decoration-opp-green underline-offset-[6px] ">
              Adam Keyes
            </span>
            .
          </h1>
          <p className="text-white sm:max-w-lg sm:text-lg lg:text-xl">
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <p className="cursor-pointer text-lg font-medium tracking-widest text-white underline decoration-opp-green decoration-2 underline-offset-[14px] transition-colors hover:text-opp-green">
            CONTACT ME
          </p>
        </div>
      </section>
    </main>
  );
};

export default App;
