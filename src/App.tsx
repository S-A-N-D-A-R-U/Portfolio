import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className=" bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-fitxl mx-auto">
        <Hero />
        <Skills/>
        <Footer/>
      </div>
    </div>
  );
}
