import React, { createContext, useState } from "react";
import Herosection from "../Herosection/Herosection";

import About from "../About/About";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import styles from "./LandingPage.module.css";
import Footer from "../Footer/Footer";
import Navigation from "../Navbar/Navigation";
import ExperienceAndTestimonials from "../ExperienceAndTestimonials/ExperienceAndTestimonials";

export const languageContext = createContext();

const LandingPage = () => {
  const [language, setLanguage] = useState("english");

  return (
    <languageContext.Provider value={[language, setLanguage]}>
      <div id="home" className={styles.landingPage}>
        <Navigation language={language} setLanguage={setLanguage} />
        <Herosection language={language} />
        <About language={language} />
        {/* <Services/> */}
        <Projects language={language} />
        <Blog language={language} />
        <ExperienceAndTestimonials/>
        <Contact language={language} />
        <Footer language={language} />
      </div>
    </languageContext.Provider>
  );
};

export default LandingPage;
