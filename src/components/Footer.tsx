import { Header } from "../components/Header";
import { PatternRings } from "./common/PatternRings";

export const Footer = () => {
  return (
    <footer className="relative bg-opp-darkGrey">
      <PatternRings className="z-1 absolute bottom-40 -left-80 lg:-left-48" />
      <div
        className="mx-auto
flex max-w-lg flex-col gap-4 px-8 py-24 text-center lg:max-w-6xl lg:flex-row lg:gap-32 lg:text-left"
      >
        <div className="space-y-4">
          <h3 className=" text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Contact
          </h3>
          <p className=" text-lg font-medium text-opp-grey">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 space-y-4 ">
          <input
            type="text"
            placeholder="name"
            className="w-full border-b border-opp-grey bg-transparent py-2 placeholder:font-medium placeholder:uppercase"
          />
          <input
            type="text"
            placeholder="email"
            className="w-full border-b border-opp-grey bg-transparent py-2 placeholder:font-medium placeholder:uppercase"
          />
          <textarea
            placeholder="Message"
            className="w-full border-b border-opp-grey bg-transparent py-2 placeholder:font-medium placeholder:uppercase"
          ></textarea>
          <a
            href="#"
            className="ml-auto text-lg font-medium uppercase text-white underline decoration-opp-green underline-offset-[16px] transition-colors hover:text-opp-green md:text-xl"
          >
            send message
          </a>
        </div>
      </div>
      <div className="mx-4 max-w-6xl border-t lg:mx-auto">
        <Header className="mx-auto px-4" />
      </div>
    </footer>
  );
};
