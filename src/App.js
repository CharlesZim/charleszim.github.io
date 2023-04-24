import { useState } from "react";

import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Portfolio from "./sections/Portfolio/Portfolio";
import Services from "./sections/Service/Services";
import Contact from "./sections/Contact/Contact";

import Header from "./components/Header";

import { ParallaxProvider } from "react-scroll-parallax";
import CircleOpacity from "./components/CircleOpacity";

import PhotoFull from "./components/PhotoFull";

import { Route, Routes } from "react-router-dom";
import Privacy from "./components/Privacy";

import "./App.css";

const Main = () => {
  const [photo, setPhoto] = useState(null);
  return (
    <ParallaxProvider>
      <div className="app">
        <PhotoFull photo={photo} setPhoto={setPhoto} />
        <Header />
        <Home />
        <About setPhoto={setPhoto} />
        <Skills />
        <Portfolio setPhoto={setPhoto} />
        <Services />
        <Contact />
        <CircleOpacity color="rgba(200,100,100,0.1)" />
        <CircleOpacity left section={1} color="rgba(255,128,255,0.1)" />
        <CircleOpacity section={2} color="rgba(255,255,0,0.1)" />
        <CircleOpacity left section={3} color="rgba(255,255,255,0.1)" />
      </div>
    </ParallaxProvider>
  );
};

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
