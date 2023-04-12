import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_area}>
      <div className={styles.logo}>
        <span>a</span>
        <span>s</span>
        <span>h</span>
        <span>i</span>
        <span>k</span>
      </div>
    </div>
  );
};

export default Logo;
