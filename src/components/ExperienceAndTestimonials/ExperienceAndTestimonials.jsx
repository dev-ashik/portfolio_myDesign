import React from "react";
import { useContext } from "react";
import Experience from "../Experience/Experience";
import { languageContext } from "../LandingPage/LandingPage";
import Testimonials from "../Testimonials/Testimonials";
import styles from "./ExperienceAndTestimonials.module.css";

const ExperienceAndTestimonials = () => {
  const [language, setLanguage] = useContext(languageContext);
  return (
    <div
      id="experience"
      className={`responsive_Width ${styles.experienceAndTestimonials}`}
    >
      <div className="sectionName_div">
        <h1 className={`sectionName sectionName_${language}`}>Experience</h1>
        <div className="sectionName_underline"></div>
      </div>
      <Testimonials />
      <Experience />
    </div>
  );
};

export default ExperienceAndTestimonials;
