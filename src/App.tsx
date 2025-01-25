import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

export default function App() {
  return (
    <div className=" bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-fitxl mx-auto">
        <Hero />
      </div>
    </div>
  );
}
