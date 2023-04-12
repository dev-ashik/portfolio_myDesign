import React, { useEffect, useState } from 'react';
import styles from './Contact.module.css';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import './Contact.css';
import { createGlobalStyle } from 'styled-components';

const aboutSectionText = {
    english_data: {
        secionName: "Contact",
        visitMessage_1: "If you have time please knock me.",
        visitMessage_2: "Let's talk about your project plan.",
        name: "Name",
        yourName: "Your name",
        mail: "Email",
        yourMail: "Your mail",
        message: "Message",
        successful: "mail successfully sended.",
        mailNotValid: "Email is not valid",
        sendMessage: "send message",
    },
    chinese_data: {
        secionName: "接触",
        visitMessage_1: "如果你有时间请敲我。",
        visitMessage_2: "让我们谈谈你的项目计划。",
        name: "姓名",
        yourName: "你的名字",
        mail: "电子邮件",
        yourMail: "你的邮件",
        message: "信息",
        successful: "邮件成功发送。",
        mailNotValid: "电子邮件无效",
        sendMessage: "发信息",
    }
}

const Contact = ({ language }) => {
    const [mailSend, setMailSend] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const [text, setText] = useState(aboutSectionText.english_data);

    useEffect(() => {
        if (language === "english") {
            setText(aboutSectionText.english_data);
        } else {
            setText(aboutSectionText.chinese_data);
        }
    }, [language]);


    const valid_email = (email) => /(.+)@(.+){2,}\.(.+){2,}/.test(email);

    const sendMail = (e) => {
        e.preventDefault();
        const isValid = valid_email(e.target.email.value);

        if (isValid === true) {
            console.log(e.target.email.value);
            emailjs.sendForm('service_eg4qxmc', 'template_d2fquz3', e.target, 'vFzUPBAjHlhoCt6GD')
                .then(res => {
                    // console.log(res);
                    res.text === 'OK' && setMailSend(true);
                    alert(text.successful);
                    e.target.message.value = "";
                })
                .catch(err => {
                    // console.log(err);
                    alert(err);
                })
        } else {
            alert(text.mailNotValid);
        }

    }

    // const onSubmit = data => {
    //     console.log(data);
    //     reset();
    // }
    return (
        <div id='contact' className={`responsive_Width section_divider_border ${styles.contactSection}`}>
            <div className='sectionName_div'>
                <h1 className={`sectionName sectionName_${language}`}>{text.secionName}</h1>
                <div className='sectionName_underline'></div>
            </div>

            <h2 className={`visitMessage visitMessage_${language}`} data-aos="fade-up">{text.visitMessage_1}<br /> {text.visitMessage_2}</h2>



            {/* <form onSubmit={handleSubmit(onSubmit)} className={styles.emailSection}>
                    <div className={styles.formTop}>
                        <div className={`${styles.nameEmail} ${styles.name}`}>
                            <label className={styles.label} htmlFor="name">{language === 'english' ? "Name" : "姓名"}</label><br />
                            {errors.name && <span style={{color: 'red'}}>{language === 'english' ? "Name is required." : "姓名是必填项。"}</span>}
                            <input {...register("name", { required: true })} />
                        </div>
                        <div className={styles.nameEmail}>
                            <label className={styles.label} htmlFor="email">{language === 'english' ? "Email" : "电子邮件"}</label><br />
                            {errors.email && <span style={{color: 'red'}}>{language === 'english' ? "Email is required." : "电子邮件是必需的。"}</span>}
                            <input {...register("email", { required: true })} />
                        </div>
                    </div>
                    
                    <label className={styles.label} htmlFor="message">{language === 'english' ? "Message" : "信息"}</label><br />
                    {errors.message && <span style={{color: 'red'}}>{language === 'english' ? "You didn't write anything." : "你什么都没写。"}</span>}
                    <textarea {...register("message", { required: true })} id="" cols="30" rows="10"></textarea>
                    <br />
                    <div className={styles.buttonDiv}>
                        <input className={`buttonStyle ${styles.submitMail}`} type="submit" value='send message'/>
                    </div>
                </form> */}

            <div className={styles.emailSection} >
                <form onSubmit={sendMail} >
                    <div className={styles.formTop}>
                        <div className={`${styles.nameEmail} ${styles.name}`}>
                            <label className={`${styles.label} ${styles.nameLabel} label_${language}`} htmlFor="name">{text.name}</label><br />
                            <input className={`${styles.nameInput} nameInput_${language}`} name="name" placeholder={text.yourName} required />
                        </div>
                        <div className={styles.nameEmail}>
                            <label className={`${styles.emailLabel} label_${language}`} htmlFor="email">{text.mail}</label><br />
                            <input name='email' placeholder={text.yourMail} required />
                        </div>
                    </div>

                    <label className={`${styles.messageLabel} label_${language}`} htmlFor="message">{text.message}</label><br />
                    <textarea id="" cols="30" rows="10" name='message' required></textarea>
                    <br />
                    {
                        // mailSend && <p style={{ color: 'green', textAlign: 'center', fontSize: '20px' }}>{text.successful}</p>
                    }
                    <div className={styles.buttonDiv}>
                        <input className={`buttonStyle buttonStyle_${language} ${styles.submitMail}`} type="submit" value={text.sendMessage} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;