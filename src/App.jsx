import "./App.css";
import { Navbar } from "./views/Navbar";
function App() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-primary">
      <Navbar />
      <div className="h-[200vh]"></div>
    </main>
  );
}

export default App;
