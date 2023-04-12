import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import styles from "./Hashlinks.module.css";

const Hashlinks = ({ language }) => {
  const [dataVisible, setDataVisible] = useState("false");
  const [ariaExpanded, setAriaExpanded] = useState("false");

  const handleMobileMenubtn = () => {
    if (dataVisible === "false") {
      setDataVisible("true");
      setAriaExpanded("true");
    } else if (dataVisible === "true") {
      setDataVisible("false");
      setAriaExpanded("false");
    }
  };
  return (
    <nav>
      <button
        onClick={handleMobileMenubtn}
        className={styles.mobile_nav_toggle}
        area-controls="primary_navigation"
        aria-expanded={ariaExpanded}
      >
        <span className="sr-only">Menu</span>
      </button>
      <BrowserRouter>
        <ul
          id="primary_navigation"
          className={`${styles.primary_navigation} ${styles.flex}`}
          data_visible={dataVisible}
        >
          <li>
            <HashLink
              onClick={handleMobileMenubtn}
              className={styles.hashlink}
              to="#home"
              smooth
            >
              {language === "english" ? (
                <span className={styles.en}>HOME</span>
              ) : (
                <span className={styles.cn}>家</span>
              )}
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={handleMobileMenubtn}
              className={styles.hashlink}
              to="#about"
              smooth
            >
              {language === "english" ? (
                <span className={styles.en}>ABOUT</span>
              ) : (
                <span className={styles.cn}>关于</span>
              )}
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={handleMobileMenubtn}
              className={styles.hashlink}
              to="#projects"
              smooth
            >
              {language === "english" ? (
                <span className={styles.en}>PROJECTS</span>
              ) : (
                <span className={styles.cn}>项目</span>
              )}
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={handleMobileMenubtn}
              className={styles.hashlink}
              to="#blog"
              smooth
            >
              {language === "english" ? (
                <span className={styles.en}>BLOG</span>
              ) : (
                <span className={styles.cn}>博客</span>
              )}
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={handleMobileMenubtn}
              className={styles.hashlink}
              to="#experience"
              smooth
            >
              {language === "english" ? (
                <span className={styles.en}>Experience</span>
              ) : (
                <span className={styles.cn}>经验</span>
              )}
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={handleMobileMenubtn}
              className={styles.hashlink}
              to="#contact"
              smooth
            >
              {language === "english" ? (
                <span className={styles.en}>CONTACT</span>
              ) : (
                <span className={styles.cn}>接触</span>
              )}
            </HashLink>
          </li>
        </ul>
      </BrowserRouter>
    </nav>
  );
};

export default Hashlinks;
