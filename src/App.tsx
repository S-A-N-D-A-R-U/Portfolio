import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className=" bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-fitxl mx-auto">
        <Nav/>
        <Hero />
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
