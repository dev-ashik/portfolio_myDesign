import React, { useEffect, useState } from "react";
import allProjectData from "../../Data/projectsData";
import styles from "./Projects.module.css";
import "./Projects.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const projectSectionText = {
  english_data: {
    secionName: "Projects",
    message_l1: "Check out some of my latest works.",
    message_l2: "If you want to see more visit my GitHub account.",
    all: "ALL",
    project: "WEB DEVELOPMENT",
    visitWebsite: "visit Website",
    github: "See more in github",
  },
  chinese_data: {
    secionName: "项目",
    message_l1: "看看我的一些最新作品。",
    message_l2: "如果您想查看更多内容，请访问我的 GitHub 帐户。",
    all: "全部",
    project: "WEB 开发",
    visitWebsite: "访问网站",
    github: "在 github 中查看更多内容",
  },
};

const Projects = ({ language }) => {
  const firstData = allProjectData.slice(0, 9);
  const [projects, setProjects] = useState(firstData);

  const allCategories = [
    ...new Set(allProjectData.map((item) => item.category)),
  ];

  const [text, setText] = useState(projectSectionText.english_data);

  useEffect(() => {
    if (language === "english") {
      setText(projectSectionText.english_data);
    } else {
      setText(projectSectionText.chinese_data);
    }
  }, [language]);

  const handleFilterProjecrt = (category) => {
    const newSelectedProjects = allProjectData.filter(
      (data) => data.category === category
    );
    const firstNineProjects = newSelectedProjects.slice(0, 9);
    setProjects(firstNineProjects);
  };

  return (
    <div
      id="projects"
      className={`responsive_Width section_divider_border ${styles.projectsSection}`}
    >
      <div className="sectionName_div">
        <h1 className={`sectionName sectionName_${language}`}>
          {text.secionName}
        </h1>
        <div className="sectionName_underline"></div>
      </div>

      <h2 className={`visitMessage visitMessage_${language}`}>
        {text.message_l1}
        <br /> {text.message_l2}
      </h2>

      <div className={styles.catagoris}>
        <button
          onClick={() => setProjects(firstData)}
          className={`buttonStyle buttonStyle_${language} ${styles.allButtonStyle} ${styles.catagorisBtn}`}
        >
          {text.all}
        </button>

        <div>
          <div className={styles.dropdown}>
            <button
              className={`${styles.dropbtn} buttonStyle buttonStyle_${language}`}
            >
              {text.project} <KeyboardArrowDownIcon />
            </button>
            <div
              className={`buttonStyle buttonStyle_${language} ${styles.dropdown_content}`}
            >
              {allCategories.map((menu, index) => (
                <button onClick={() => handleFilterProjecrt(menu)} key={index}>
                  {menu}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`grid_container`}>
        {projects.map(({ image, about, about_c, tech, link }, index, uid) => (
          <div
            className={`grid_item_${index + 1} ${styles.project}`}
            key={index}
            data-aos="zoom-in"
          >
            <img
              key={uid}
              className={` ${styles.eachpicture} `}
              src={image}
              alt=""
            />
            <div className={`${styles.projectsContent}`}>
              <p
                className={`${styles.aboutText} project_aboutText_${language}`}
              >
                {language === "english" ? about : about_c}
              </p>
              <p className={styles.TechText}>{tech}</p>
              {link && (
                <a
                  className={`buttonStyle buttonStyle_${language} ${styles.visitSiteButton} `}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text.visitWebsite}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonDiv}>
        <button
          className={`${styles.contactButton} buttonStyle buttonStyle_${language}`}
        >
          <a
            className={`${styles.gitHubButton_a}`}
            href="https://github.com/dev-ashik"
            target="_blank"
            rel="noreferrer"
          >
            {text.github}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Projects;
