import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import "./rates.css";

import exclusiveImage from "../../static/images/exclusive.png";
import twoGISImage from "../../static/images/2GIS.png";
import fitImage from "../../static/images/fit.png";
import { useTranslation } from "react-i18next";

const Rates = () => {
  const { t } = useTranslation();
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section id="rates" className="client-rates">
      <div className="container">
        <div className="rates-content">
          <h2 className="rates-title subtitle">{t("Customer review's")}</h2>
          <div className="rates-gallery">
            <Swiper
              className="rates-section rates-wrapper"
              style={{ overflow: "visible" }}
              modules={[Pagination]}
              spaceBetween={30}
              breakpoints={{
                900: {
                  slidesPerView: 3,
                },
                600: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              centeredSlides={true}
              pagination={pagination}
            >
              <SwiperSlide className="rates-slide">
                <div className="rates-info">
                  <div className="rates-ava">
                    <img src={exclusiveImage} alt="ava" />
                  </div>
                  <h4 className="rates-info__title">Exclusive Qurylys</h4>
                  <p className="rates-info__text">
                    {t("Exclusive Qurylys")}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="rates-slide">
                <div className="rates-info">
                  <div className="rates-ava">
                    <img src={twoGISImage} alt="ava" />
                  </div>
                  <h4 className="rates-info__title">2ГИС</h4>
                  <p className="rates-info__text">
                    {t("2GIS")}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="rates-slide">
                <div className="rates-info">
                  <div className="rates-ava">
                    <img src={fitImage} alt="ava" />
                  </div>
                  <h4 className="rates-info__title">FITANTION</h4>
                  <p className="rates-info__text">
                    {t("Fitantion")}
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rates;
