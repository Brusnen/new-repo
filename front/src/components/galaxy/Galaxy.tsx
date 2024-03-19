import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "./galaxy.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import img08 from "../../static/images/08.png";
import img09 from "../../static/images/09.png";
import img010 from "../../static/images/010.png";
import img012 from "../../static/images/012.png";
import img018 from "../../static/images/018.png";
import img022 from "../../static/images/022.png";
import img001 from "../../static/images/001.png";
import img003 from "../../static/images/003.png";
import img004 from "../../static/images/004.png";
import img007 from "../../static/images/007.png";
import img008 from "../../static/images/008.png";
import img0011 from "../../static/images/0011.png";

import img013 from "../../static/images/013.png";
import img014 from "../../static/images/014.png";
import img015 from "../../static/images/015.png";
import img016 from "../../static/images/016.png";
import img017 from "../../static/images/017.png";
import img019 from "../../static/images/019.png";
import img021 from "../../static/images/021.png";
import img020 from "../../static/images/020.png";
import img002 from "../../static/images/002.png";
import img005 from "../../static/images/005.png";
import img006 from "../../static/images/006.png";
import img009 from "../../static/images/009.png";
import img0010 from "../../static/images/0010.png";
import { useTranslation } from "react-i18next";

const imagesTop = [
  img08,
  img09,
  img010,
  img012,
  img018,
  img022,
  img001,
  img003,
  img004,
  img007,
  img008,
  img0011,
];

const imagesBottom = [
  img013,
  img014,
  img015,
  img016,
  img017,
  img019,
  img021,
  img020,
  img002,
  img005,
  img006,
  img009,
  img0010,
];

const titleVariants = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, bounce: 0.4, type: "spring" },
  },
};

const Galaxy = () => {
  const { t } = useTranslation();
  const renderGallery = (images: string[], isBottom: boolean) => (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      autoHeight
      speed={5000}
      breakpoints={{
        1000: {
          slidesPerView: 9,
        },
        600: {
          slidesPerView: 7,
        },
        0: {
          slidesPerView: 4,
        },
      }}
      allowTouchMove={false}
      loop
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: isBottom,
        stopOnLastSlide: false,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="galaxy-block">
          <img src={image} alt={`galaxy ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section id="galaxy" className="galaxy-clients">
      <div className="gradient-top"></div>
      <div className="slider-container">
        <div className="galaxy-content">
          <motion.h2
            className="galaxy-title subtitle"
            initial="hidden"
            whileInView="visible"
            variants={titleVariants}
          >
            {t("Galaxy clients")}
          </motion.h2>
          <div className="galaxy-gallery galaxy-gallery__top">
            {renderGallery(imagesTop, false)}
          </div>
          <div className="galaxy-gallery galaxy-gallery__bottom">
            {renderGallery(imagesBottom, true)}
          </div>
        </div>
      </div>
      <div className="gradient-bottom"></div>
    </section>
  );
};

export default Galaxy;
