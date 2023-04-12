import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonials.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const testimonialData = [
  {
    id: "1",
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod unde at fugit est ullam? Sed est cum veritatis aut officiis assumenda adipisci pariatur, rerum consequatur dolor id minus, beatae officia!",
    name: "Md ashik mahmud",
    title: "software Developer",
  },
  {
    id: "2",
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod unde at fugit est ullam? Sed est cum veritatis aut officiis assumenda adipisci pariatur, rerum consequatur dolor id minus, beatae officia!",
    name: "Md ashik mahmud",
    title: "software Developer",
  },
  {
    id: "3",
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod unde at fugit est ullam? Sed est cum veritatis aut officiis assumenda adipisci pariatur, rerum consequatur dolor id minus, beatae officia!",
    name: "Md ashik mahmud",
    title: "software Developer",
  },
  {
    id: "4",
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod unde at fugit est ullam? Sed est cum veritatis aut officiis assumenda adipisci pariatur, rerum consequatur dolor id minus, beatae officia!",
    name: "Md ashik mahmud",
    title: "software Developer",
  },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialsSwiper_container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${styles.testimonialsSwiper}`}
      >
        {testimonialData.map((data) => (
          <SwiperSlide key={data.id} className={styles.swiperItem}>
            <img src={data.img} alt="" />
            <p>{data.description}</p>
            <h3>{data.name}</h3>
            <span>{data.title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
