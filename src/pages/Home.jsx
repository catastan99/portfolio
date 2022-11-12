import React, { useEffect } from "react";

import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import ReactGA from "react-ga";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
ReactGA.initialize("G-6M78KXC67L");

function Home() {
  useEffect(() => {
    ReactGA.send("pageview");
    ReactGA.pageview("/about/contact-us");
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
