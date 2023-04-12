import React from 'react';
import styles from './Services.module.css';
import codeMonitor from '../../images/codeMonitor.svg';
import siteDesign from '../../images/siteDesign.svg';

const Services = () => {
    return (
        <div className={styles.servicesBackgrond}>
            <div className={`my_container ${styles.services}`} id="services">
                <h3 className={styles.sectionName}>SERVICES</h3>
                <div className={styles.servicesCardArea}>
                    <div className={styles.webDevelopmentServices}>
                        <div className={styles.servicesCard}>
                            <img src={codeMonitor} alt='codeMonitor' height="35" width="35"></img>
                            <p className={styles.cardTitle}>Web development</p>
                            <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est pellentesque.</p>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.webDesignServices}>
                        <div className={styles.servicesCard}>
                            <img src={siteDesign} alt='siteDesign' height="35" width="35"></img>
                            <p className={styles.cardTitle}>Web design</p>
                            <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est pellentesque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;