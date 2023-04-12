import React, { useState, useEffect } from "react";
import styles from "./Herosection.module.css";
import "./Herosection.css";

import wechat from "../../images/icons/wechat_logo.svg";
import facebook from "../../images/icons/facebook.svg";
import twitter from "../../images/icons/twitter.svg";
import instagram from "../../images/icons/instagram.ico";
import whatsApp from "../../images/icons/whatsApp.svg";
import skype from "../../images/icons/skype.svg";
import profile from "../../images/background/profile.jpeg";
import wechatQrCode from "../../images/qr_code/WeChat.jpg";
import WhatsAppQrCode from "../../images/qr_code/WhatsApp.jpg";
import SocialModal from "../SocialModal/SocialModal";

import profile1 from "../../images/qr_code/profile.jpeg";

const heroSectionText = {
  english_data: {
    hello: "Hello, I am",
    name: "Md Ashik Mahmud",
    about: "WEB DEVELOPER and DESIGNER",
    contact: "contact",
    wechat_modal_message: "To get my WeChat account please scan this code.",
    whatsapp_modal_message:
      "To get my What's App account please scan this code.",
  },
  chinese_data: {
    hello: "你好，我是",
    name: "Md Ashik Mahumd",
    chinese_name: "(阿什克)",
    about: "网页开发者和设计师",
    contact: "接触",
    wechat_modal_message: "要获取我的微信账号，请扫描此代码。",
    whatsapp_modal_message: "要获取我的 What's App 帐户，请扫描此代码。",
  },
};

const Herosection = ({ language }) => {
  const [text, setText] = useState(heroSectionText.english_data);

  useEffect(() => {
    if (language === "english") {
      setText(heroSectionText.english_data);
    } else {
      setText(heroSectionText.chinese_data);
    }
  }, [language]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleModalClose = () => setModalOpen(false);

  const handleModalOpen = (data) => {
    if (data === "wechat") {
      setModalData({
        qr_code: wechatQrCode,
        topImg: profile1,
        message: text.wechat_modal_message,
      });
      setModalOpen(true);
    } else if (data === "whatsapp") {
      setModalData({
        qr_code: WhatsAppQrCode,
        topImg: profile1,
        message: text.whatsapp_modal_message,
      });
      setModalOpen(true);
    }
  };

  return (
    <div className={` ${styles.herosectionBackground}`}>
      <div className={`responsive_Width ${styles.herosection}`}>
        <div className={styles.herosectionLeft}>
          <h2
            className={`${styles.beforeName} heroSection_beforeName_${language}`}
          >
            {text.hello}
          </h2>
          <h2 className={`${styles.name} heroSection_name_english`}>
            {text.name}
          </h2>
          {language === "chinese" && (
            <h2
              className={`${styles.name_chinese} heroSection_name_${language}`}
            >
              {text.chinese_name}
            </h2>
          )}
          <p className={`${styles.subtitle} heroSection_subtitle_${language}`}>
            {text.about}
          </p>

          <div className={styles.sosialSection}>
            <a
              className={`${styles.contactButton} buttonStyle buttonStyle_${language}`}
              href="https://www.linkedin.com/in/dev-ashik/"
              target="_blank"
              rel="noreferrer"
            >
              {text.contact}
            </a>

            <div className={styles.sosialLink}>
              <a
                href="https://www.facebook.com/Ashik100100/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.facebook}
                  src={facebook}
                  alt="facebook"
                  height="35"
                  width="35"
                />
              </a>
              <img
                onClick={() => handleModalOpen("wechat")}
                className={styles.facebook}
                src={wechat}
                alt="facebook"
                height="35"
                width="35"
              />
              <img
                onClick={() => handleModalOpen("whatsapp")}
                className={styles.facebook}
                src={whatsApp}
                alt="facebook"
                height="35"
                width="35"
              />
              {/* <a href="#" target="_blank" rel="noreferrer"><img className={styles.twitter} src={twitter} alt="twitter" height="35" width="35" /></a> */}
              <a
                href="https://join.skype.com/invite/vlqydyRfripu"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.skype}
                  src={skype}
                  alt="skype"
                  height="35"
                  width="35"
                />
              </a>
              {/* <a href="https://www.instagram.com/ashik.swfu/" target="_blank" rel="noreferrer"><img className={styles.instagram} src={instagram} alt="instagram" height="35" width="35" /></a> */}

              <SocialModal
                modalOpen={modalOpen}
                handleModalClose={handleModalClose}
                modalData={modalData}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.herosectionRight}
          styles={{ display: "flex", alignItems: "flex-end" }}
        >
          <img
            className={styles.profilePhoto}
            src={profile}
            alt=""
            height="450"
            width="330"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
