import { ExperiencesSection } from "./components/ExperiencesSection";
import { Header } from "./components/Header";
import { IntroSection } from "./components/IntroSection";

const App = () => {
  return (
    <main className="relative mx-auto max-w-5xl px-8">
      <Header />
      <IntroSection />
      <ExperiencesSection />
    </main>
  );
};

export default App;
