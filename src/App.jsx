import "./App.css";
import { Collab } from "./views/Collab";
import { Diff } from "./views/Diff";
import { Hero } from "./views/Hero";
import { Navbar } from "./views/Navbar";
import { Roadmap } from "./views/Roadmap";
import { Story } from "./views/Story";

function App() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-primary">
      <Navbar />
      <Hero />
      <Story />
      <Collab />
      <Roadmap />
      <Diff />
    </main>
  );
}

export default App;
