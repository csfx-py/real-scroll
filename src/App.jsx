import "./App.css";
import { Collab } from "./views/Collab";
import { Diff } from "./views/Diff";
import { Footer } from "./views/Footer";
import { Hero } from "./views/Hero";
import { Navbar } from "./views/Navbar";
import { Roadmap } from "./views/Roadmap";
import { Stats } from "./views/Stats";
import { Story } from "./views/Story";
import { Vision } from "./views/Vision";

function App() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-primary">
      <Navbar />
      <Hero />
      <Story />
      <Collab />
      <Roadmap />
      <Diff />
      <Stats />
      <Vision />
      <Footer />
    </main>
  );
}

export default App;
