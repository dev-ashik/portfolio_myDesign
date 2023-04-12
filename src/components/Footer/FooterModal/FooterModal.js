import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './FooterModal.module.css';
import closeIcon from '../../../images/icons/close-icon.svg';
import wechatQrCode from '../../../images/qr_code/WeChat.jpg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 300,
  // p: 3,
};




const FooterModal = ({ modalOpen, handleModalClose, modalData }) => {
  const {qr_code, message} = modalData;

  return (
    <div>
      <Modal
        disableScrollLock={ true }
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.modalBox} >
          <div className={styles.closeIconDiv}>
            <img onClick={handleModalClose} className={styles.closeIcon} src={closeIcon} alt="" />
          </div>
          <div className={styles.modalBody}>
            <div className={styles.qrCodeDiv}>
              <img className={styles.qrCode} src={qr_code} alt="" />
            </div>
            <p className={styles.text}>{message}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FooterModal;
