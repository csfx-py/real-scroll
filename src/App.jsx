import "./App.css";
import { Hero } from "./views/Hero";
import { Navbar } from "./views/Navbar";
function App() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-primary">
      <Navbar />
      <Hero />
      <div className="h-[200vh]"></div>
    </main>
  );
}

export default App;
