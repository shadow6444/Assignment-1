import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import BottomNav from "./components/BottomNav";

const App = () => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme((prevState) => !prevState);
  };
  return (
    <div
      className={`min-h-screen flex justify-center ${
        theme ? "bg-gray-900" : "bg-gray-100"
      } text-cyan-700 transition-colors duration-200`}
      id="home"
    >
      <div className="w-5/6 mt-8">
        <Navbar toggle={toggleTheme} theme={theme} />
        <BottomNav />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
