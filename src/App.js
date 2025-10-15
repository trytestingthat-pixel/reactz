import React from "react";
import Navigation from "./components/Navigation.js";
import MainPage from "./components/MainPage.js";
import Hero from "./components/InteractiveHero.js";
import MAP from "./components/mapsection.js";
import FOOTER from "./components/Footer.js";
import ABOUT from "./components/about.js";
import CONTACT from "./components/contact.js";
import UNAVAILABLE from "./components/NotFound.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <MainPage />
              <MAP />
            </>
          } />
          <Route path="/about-us" element={<ABOUT />} />
          <Route path="/contact" element={<CONTACT />} />
          <Route path="*" element={<UNAVAILABLE />} />
        </Routes>
        <FOOTER />
      </div>
    </Router>
  );
}

export default App;