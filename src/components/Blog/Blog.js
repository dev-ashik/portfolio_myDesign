import React, { useEffect, useState } from 'react';
import { blogData } from '../../Data/blogData';
import styles from './Blog.module.css';
import './Blog.css';

const BlogSectionText = {
    english_data: {
        secionName: "my Blogs",
        visitMessage: "Sometimes I like to write blogs. I always try to make some topic to easter so that everyone can understand. and they can apply it on their work. There are some of my blogs.",
        view: "view",
        blogSite: "My Blogs"
    },
    chinese_data: {
        secionName: "我的博客",
        visitMessage: "有时我喜欢写博客。我总是试图为复活节做一些话题，以便每个人都能理解。他们可以将其应用到他们的工作中。有我的一些博客。",
        view: "看法",
        blogSite: "我的博客"
    }
}

const Blog = ({ language }) => {
    const [text, setText] = useState(BlogSectionText.english_data);

    useEffect(() => {
        if (language === "english") {
            setText(BlogSectionText.english_data);
        } else {
            setText(BlogSectionText.chinese_data);
        }
    }, [language]);

    return (
        <div id='blog' className={`responsive_Width section_divider_border ${styles.blogSection}`}>
            <div className='sectionName_div'>
                <h1 className={`sectionName sectionName_${language}`}>{text.secionName}</h1>
                <div className='sectionName_underline'></div>
            </div>

            <h2 className={`visitMessage blog_visitMessage_${language}`} data-aos="fade-up">{text.visitMessage}</h2>


            <div className={styles.blog_grid_container}>
                {
                    blogData.map((data, uid) => <div className={styles.blog_grid_item} key={uid} data-aos="zoom-in">
                        <div className={styles.imageDiv}>
                            <img src={data.img} className={styles.blog_item_Image} alt="" />
                        </div>
                        <div className={styles.cardBody}>
                            <h2 className={`${styles.topicName} blog_topicName_${language}`}>{data.topic.length > 70 ? `${data.topic.substring(0, 70)}...` : data.topic}</h2>
                            <div className={styles.buttonDiv}>
                                <a className={`buttonStyle buttonStyle_${language} ${styles.buttonStyle}`} href={data.link} target="_blank" rel="noreferrer">{text.view}</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className={styles.github_buttonDiv}>
                <a className={`buttonStyle buttonStyle_${language} ${styles.buttonStyle}`} href="https://medium.com/@ashik.mahmud" target="_blank" rel="noreferrer" data-aos="flip-left">{text.blogSite}</a>
            </div>
        </div>
    );
};


export default Blog;