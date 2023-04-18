import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Portfolio from "./sections/Portfolio/Portfolio";
import Service from "./sections/Service/Service";
import Contact from "./sections/Contact/Contact";

import Header from "./components/Header";

import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import CircleOpacity from "./components/CircleOpacity";

function App() {
  return (
    <ParallaxProvider>
      <div className="app">
        <Header />
        <CircleOpacity />
        <CircleOpacity left section={1} color="rgba(255,128,255,0.2)" />
        <CircleOpacity section={2} color="rgba(255,255,255,0.2)" />
        <CircleOpacity left section={3} color="rgba(128,255,128,0.2)" />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Service />
        <Contact />
      </div>
    </ParallaxProvider>
  );
}

export default App;
