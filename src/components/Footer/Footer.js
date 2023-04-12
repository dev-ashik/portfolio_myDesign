import React, { useEffect, useState } from "react";
import corner from "../../images/background/footerCornarBackground.png";
import styles from "./Footer.module.css";
import "./Footer.css";

import wechatQrCode from "../../images/qr_code/WeChat.jpg";
import WhatsAppQrCode from "../../images/qr_code/WhatsApp.jpg";
import carveLine from "../../images/icons/carveLine.svg";
import SocialModal from "../SocialModal/SocialModal";
import profile from "../../images/qr_code/profile.jpeg";

const socialAccountWithCode = [
  {
    
    id: "1",
    name: "wechat",
    class: "fa-brands fa-weixin",
    topImage: profile,
    qrCode: wechatQrCode,
  },
  {
    id: "2",
    name: "whatsapp",
    class: "fa-brands fa-whatsapp",
    topImage: profile,
    qrCode: WhatsAppQrCode,
  },
];

const socialAccount = [
  {
    id: "1",
    name: "linkedIn",
    class: "fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com/in/dev-ashik/",
  },
  {
    id: "3",
    name: "facebook",
    class: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com/Ashik100100/",
  },
  {
    id: "5",
    name: "skype",
    class: "fa-brands fa-skype",
    link: "https://join.skype.com/invite/vlqydyRfripu",
  },
  {
    id: "6",
    name: "instagram",
    class: "fa-brands fa-instagram",
    link: "https://www.instagram.com/ashik.swfu/",
  },
  //   {
  //     id: "7",
  //     name: "twitter",
  //     class: "fa-brands fa-twitter",
  //     link: "",
  //   },
  {
    id: "8",
    name: "github",
    class: "fa-brands fa-github",
    link: "https://github.com/dev-ashik",
  },
  {
    id: "9",
    name: "medium",
    class: "fa-brands fa-medium",
    link: "https://medium.com/@ashik.mahmud",
  },
  {
    id: "10",
    name: "codepen",
    class: "fa-brands fa-codepen",
    link: "https://codepen.io/dev-ashik",
  },
];

const footerSectionText = {
  english_data: {
    thank_you: "Thank you",
    forTime: "for your time",
    linkedIn: "LinkedIn",
    facebook: "FaceBook",
    skype: "Skype",
    Instagram: "Intagram",
    twitter: "Twitter",
    wechat: "WeChat",
    wechat_modal_message: "To get my WeChat account please scan this code.",
    WhatsAPP: "WhatsApp",
    whatsapp_modal_message:
      "To get my What's App account please scan this code.",
    gitHub: "Git Hub",
    Medium: "Medium",
  },
  chinese_data: {
    thank_you: "谢谢你",
    forTime: "为你的时间",
    linkedIn: "LinkedIn",
    facebook: "FaceBook",
    skype: "Skype",
    Instagram: "Intagram",
    twitter: "Twitter",
    wechat: "微信",
    wechat_modal_message: "要获取我的微信账号，请扫描此代码。",
    WhatsAPP: "WhatsApp",
    whatsapp_modal_message: "要获取我的 What's App 帐户，请扫描此代码。",
    gitHub: "Git Hub",
    Medium: "Medium",
  },
};

const Footer = ({ language }) => {
  const [text, setText] = useState(footerSectionText.english_data);

  useEffect(() => {
    if (language === "english") {
      setText(footerSectionText.english_data);
    } else {
      setText(footerSectionText.chinese_data);
    }
  }, [language]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleModalClose = () => setModalOpen(false);

  const handleModalOpen = (data) => {
    if (data === "wechat") {
      setModalData({
        qr_code: wechatQrCode,
        topImg: profile,
        message: text.wechat_modal_message,
      });
      setModalOpen(true);
    } else if (data === "whatsapp") {
      setModalData({
        qr_code: WhatsAppQrCode,
        topImg: profile,
        message: text.whatsapp_modal_message,
      });
      setModalOpen(true);
    }
  };

  console.log(modalData)
  const currentYear = new Date().getFullYear();
  return (
    <div className={`${styles.footerBackground}`}>
      <div className={`${styles.thankCorner}`}>
        <img className={styles.cornarImage} src={corner} alt="" />
        <div className={styles.footerContact}>
          <h3 className={`${styles.thanks} thanks_${language}`}>
            {text.thank_you} <br /> {text.forTime}
          </h3>
          <img className={styles.carveLine} src={carveLine} alt="" />
        </div>
      </div>
      <div className="responsive_Width">
        <div className={`responsive_Width ${styles.footer}`}>
          <div className={styles.socialLinks}>
            <ul>
              {socialAccountWithCode.map((item) => (
                <li
                  key={item.id}
                  className={styles.socialLinks_item}
                  onClick={() => handleModalOpen(item.name)}
                >
                  <i className={item.class}></i>
                </li>
              ))}
              {socialAccount.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.socialIcon_a}`}
                  >
                    <i className={item.class}></i>
                  </a>
                </li>
              ))}
            </ul>
            <SocialModal
              modalOpen={modalOpen}
              handleModalClose={handleModalClose}
              modalData={modalData}
            />
          </div>
        </div>
        <p className={styles.copyrightText}>
          Md Ashik Mahmud {language === "chinese" && <span>( 阿什克 ) </span>} @{" "}
          {currentYear}
        </p>
      </div>
    </div>
  );
};

export default Footer;
