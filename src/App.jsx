import "./App.css";
import { Hero } from "./views/Hero";
import { Navbar } from "./views/Navbar";
import { Story } from "./views/Story";
function App() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-primary">
      <Navbar />
      <Hero />
      <Story />
      <div className="h-[200vh]"></div>
    </main>
  );
}

export default App;
