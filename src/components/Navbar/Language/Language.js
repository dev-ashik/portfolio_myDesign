import React from "react";
import styles from "./Language.module.css";
import "./Language.css";

const Language = ({ setLanguage, language }) => {
  return (
    <div className={styles.languageChange}>
      <div className={styles.colorDiv} language={language}>
        {language === "english" ? "En" : "汉"}
      </div>
      <button
        onClick={() => setLanguage("english")}
        className={language === "english" ? "selected" : ""}
        id="englishBtn"
        language={language}
      >
        En
      </button>
      <button
        onClick={() => setLanguage("chinese")}
        className={language === "chinese" ? "selected" : ""}
        id="chineseBtn"
        language={language}
      >
        汉
      </button>
    </div>
  );
};

export default Language;
