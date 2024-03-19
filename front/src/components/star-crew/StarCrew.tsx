import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./star-crew.css";
import { useEffect, useState } from "react";

import gray5 from "../../static/images/gray5.png";
import gray3 from "../../static/images/gray3.png";
import gray1 from "../../static/images/gray1.png";
import gray4 from "../../static/images/gray4.png";
import gray2 from "../../static/images/gray2.png";
import gray14 from "../../static/images/gray14.png";
import gray7 from "../../static/images/gray7.png";
import gray9 from "../../static/images/gray9.png";
import image70 from "../../static/images/70.png";
import image046 from "../../static/images/046.png";
import image72 from "../../static/images/72.png";
import image43 from "../../static/images/43.png";
import gray13 from "../../static/images/gray13.png";
import image41 from "../../static/images/41.png";
import image74 from "../../static/images/74.png";
import image044 from "../../static/images/044.png";
// Person images
import image12 from "../../static/images/12.png";
import image15 from "../../static/images/15.png";
import image13 from "../../static/images/13.png";
import image16 from "../../static/images/16.png";
import image14 from "../../static/images/14.png";
import image17 from "../../static/images/17.png";
import image18 from "../../static/images/18.png";
import image20 from "../../static/images/20.png";
import image71 from "../../static/images/71.png";
import image047 from "../../static/images/047.png";
import image73 from "../../static/images/73.png";
import image44 from "../../static/images/44.png";
import image24 from "../../static/images/24.png";
import image42 from "../../static/images/42.png";
import image75 from "../../static/images/75.png";
import image045 from "../../static/images/045.png";
import { useTranslation } from "react-i18next";


const images = [
  { id: 1, humanSrc: gray5, personSrc: image12 },
  { id: 2, humanSrc: gray3, personSrc: image15 },
  { id: 3, humanSrc: gray1, personSrc: image13 },
  { id: 4, humanSrc: gray4, personSrc: image16 },
  { id: 5, humanSrc: gray2, personSrc: image14 },
  { id: 6, humanSrc: gray14, personSrc: image17 },
  { id: 7, humanSrc: gray7, personSrc: image18 },
  { id: 8, humanSrc: gray9, personSrc: image20 },
  { id: 9, humanSrc: image70, personSrc: image71 },
  { id: 10, humanSrc: image046, personSrc: image047 },
  { id: 11, humanSrc: image72, personSrc: image73 },
  { id: 12, humanSrc: image43, personSrc: image44 },
  { id: 13, humanSrc: gray13, personSrc: image24 },
  { id: 14, humanSrc: image41, personSrc: image42 },
  { id: 15, humanSrc: image74, personSrc: image75 },
  { id: 16, humanSrc: image044, personSrc: image045 },
];


const StarCrew = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const prevHandler = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const nextHandler = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef) {
      const updateActiveIndex = () => {
        setActiveIndex(swiperRef.realIndex);
      };

      swiperRef.on("slideChange", updateActiveIndex);

      return () => {
        if (swiperRef) {
          swiperRef.off("slideChange", updateActiveIndex);
        }
      };
    }
  }, [swiperRef]);
  return (
    <section id="star-crew" className="star-crew">
      <div className="slider-container">
        <div className="star-crew__content">
          <h2 className="star-title subtitle">{t("Star crew")}</h2>
          <div className="star-crew__gallery">
            <Swiper
              modules={[Navigation]}
              breakpoints={{
                900: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 4,
                },
                500: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20
                }
              }}
              pagination={{ clickable: true }}  
              onSwiper={setSwiperRef}
              loop={true}
              className="star-crew__section star-crew__wrapper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={image.id} className="star-crew__slider">
                  <img src={image.personSrc} alt="person" className="person" />

                  <img src={image.humanSrc} alt="human" className="human" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="case-next__btn"
              onClick={nextHandler}
            ></div>
            <div
              className="case-back__btn"
              onClick={prevHandler}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarCrew;
