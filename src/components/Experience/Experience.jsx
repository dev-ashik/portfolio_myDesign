import React, { useState } from "react";
import styles from "./Experience.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const experienceData = [
  {
    id: "1",
    emplye: "Full Stack Web Developer",
    companyName: "swfu",
    duration: "december 15 - present",
    desc: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi hic minima distinctio eligendi quam mollitia animi voluptatibus tempore corporis fugiat",

      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi hic minima distinctio eligendi quam mollitia animi voluptatibus tempore corporis fugiat",

      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi hic minima distinctio eligendi quam mollitia animi voluptatibus tempore corporis fugiat",
    ],
    bgColor: "rgba(59, 59, 59, 0.541)",
    img: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    emplye: "Web Developer",
    companyName: "pinior alpha",
    duration: "december 15 - present",
    desc: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi hic minima distinctio eligendi quam mollitia animi voluptatibus tempore corporis fugiat",

      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi hic minima distinctio eligendi quam mollitia animi voluptatibus tempore corporis fugiat",
    ],
    bgColor: "rgba(60, 63, 49, 0.541)",
    img: "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    emplye: "web designer",
    companyName: "apple",
    duration: "december 15 - present",
    desc: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi hic minima distinctio eligendi quam mollitia animi voluptatibus tempore corporis fugiat",

      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi hic minima distinctio eligendi quam mollitia animi voluptatibus tempore corporis fugiat",

      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi hic minima distinctio eligendi quam mollitia animi voluptatibus tempore corporis fugiat",
    ],
    bgColor: "rgba(49, 63, 60, 0.541)",
    img: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Experience = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={styles.experienceSwiperSection}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {experienceData.map((data) => (
          <SwiperSlide
            key={data.id}
            className={styles.swiperItem}
            style={{ background: data.bgColor }}
          >
            <p className={styles.emplye}>{data.emplye}</p>
            <h3 className={styles.companyName}>{data.companyName}</h3>
            <p className={styles.duration}>{data.duration}</p>
            <div className={styles.about}>
              {data.desc.map((item, uid) => (
                <p key={uid}>
                  <KeyboardDoubleArrowRightIcon className={styles.rightArrow} />
                  {item}
                </p>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {experienceData.map((data) => (
          <SwiperSlide key={data.id} className={styles.swiperItem_down}>
            <img src={data.img} alt=""/>
            <div className={styles.smallContent}>
              <p className={styles.emplye}>{data.emplye}</p>
              <h3 className={styles.companyName}>{data.companyName}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experience;
