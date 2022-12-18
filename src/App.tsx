import { ExperiencesSection } from "./components/ExperiencesSection";
import { Header } from "./components/Header";
import { IntroSection } from "./components/IntroSection";
import { ProjectSection } from "./components/ProjectSection/ProjectSection";

const App = () => {
  return (
    <main className="relative mx-auto max-w-6xl px-8">
      <Header />
      <IntroSection />
      <ExperiencesSection />
      <ProjectSection />
    </main>
  );
};

export default App;
