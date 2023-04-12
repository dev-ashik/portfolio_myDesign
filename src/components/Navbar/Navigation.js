import React from "react";
import styles from "./Navigation.module.css";

import Logo from "./Logo/Logo";
import Language from "./Language/Language";
import Hashlinks from "./Hashlinks/Hashlinks";

const Navigation = ({ setLanguage, language }) => {
  return (
    <header className={`${styles.primary_header} ${styles.flex} `}>
      <Logo />
      <Hashlinks language={language} />
      <Language setLanguage={setLanguage} language={language} />
    </header>
  );
};

export default Navigation;
