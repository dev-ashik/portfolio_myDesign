import { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./SocialModal.module.css";
import "./SocialModal.css";
import { languageContext } from "../LandingPage/LandingPage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const SocialModal = ({ modalOpen, handleModalClose, modalData }) => {
  const [language] = useContext(languageContext);
  const { qr_code, message, topImg } = modalData;
  console.log(modalData);

  return (
    <div>
      <Modal
        disableScrollLock={true}
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.modalBox}>
          <div className={styles.TopImage}>
            <img className={styles.TopImage_img} src={topImg} alt="" />
          </div>
          <i
            onClick={handleModalClose}
            className={`fa-solid fa-xmark ${styles.closeIcon}`}
          ></i>
          <div className={styles.modalBody}>
            <img className={styles.qrCode} src={qr_code} alt="" />
            <p className={`${styles.text} socialModal_text_${language}`}>
              {message}
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SocialModal;
