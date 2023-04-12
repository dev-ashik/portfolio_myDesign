import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import aboutSectionText from "./aboutSectionTextData";
import "./About.css";

import Axios from "axios";
import fileDownload from "js-file-download";

const About = ({ language }) => {
  const [text, setText] = useState(aboutSectionText.english_data);

  useEffect(() => {
    if (language === "english") {
      setText(aboutSectionText.english_data);
    } else {
      setText(aboutSectionText.chinese_data);
    }
  }, [language]);

  const handleDownloadCv = (url, filename) => {
    Axios.get(url, {
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, filename);
    });
  };

  return (
    <div
      id="about"
      className={`responsive_Width section_divider_border ${styles.about}`}
    >
      <div className="sectionName_div">
        <h1 className={`sectionName sectionName_${language}`}>
          {text.secionName}
        </h1>
        <div className="sectionName_underline"></div>
      </div>

      <div className={styles.aboutDown}>
        <div className={styles.aboutLeft} data-aos="fade-right">
          <h2 className={`${styles.aboutTitle} aboutTitle_${language}`}>
            {text.title}
          </h2>
          <p className={`${styles.aboutText} aboutText_${language}`}>
            {text.text}
          </p>
          <div className={`${styles.cv_div}`}>
            <button
              className={`buttonStyle buttonStyle_${language}`}
              onClick={() =>
                handleDownloadCv(
                  "https://t7fqhg.bl.files.1drv.com/y4mHBplT1Jdj8hPMBdzcueMJCTcX2gn-akWKtFfJ76LnF1KzfioYU64CJkNcbgt7zVuFC6rtyxYN0MHfVtAC3l1Z2YpmwHwK-HPuISvWGWIC6zfo8MNT30lcOZeq4xpY9STKJbfjsof-dXSvHYenAPQEEWZt1OUyvS8DVw2pk8Cwiz-1bHSAbyoe_nxJJZVuac60sNA2PRZWRc17VV-CydHzA",
                  "Md_Ashik_Mahumd_CV.pdf"
                )
              }
            >
              {text.d_cv}
            </button>
          </div>
        </div>
        <div className={`${styles.grid_container}`}>
          {text.table.map((data, index) => (
            <div
              className={`${styles.card} card_${index}`}
              key={index}
              data-aos="zoom-in-left"
            >
              <h2 className={`${styles.cardTitle} cardTitle_${language}`}>
                {data.name}
              </h2>
              <p className={`${styles.cetagory} cetagory_${language}`}>
                {data.cetagory}
              </p>
              <p
                className={`${styles.cetagoryMeterials} cetagoryMeterials_${language}`}
              >
                {data.cetagoryMeterials}
              </p>
              <p className={`${styles.tools} tools_${language}`}>{data.tool}</p>
              <ul className={styles.ul}>
                {data.toolLists.map((tool, index) => (
                  <li className={`tool_${language}`} key={index}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
