import React, { useEffect, useState } from "react";
import "./cases.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import SeeMoreButton from "../../elements/see-more-button/SeeMoreButton";
import { useTranslation } from "react-i18next";

type CaseImagesType = {
  id: number;
  imgSrc: string;
  alt: string;
};

type CasesPropsType = {
  data: CaseImagesType[];
  video?: boolean;
  isFirst?: boolean;
  name?: string;
  analytics?: boolean;
};

const Cases = (props: CasesPropsType) => {
  const isCreative = !!props.name;
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const {t} = useTranslation();

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
    <section
      id="cases"
      className="our-cases"
      style={isCreative ? { background: "#1c1050" } : {}}
    >
      {isCreative && <div className="gradient-top"></div>}
      <div className="container">
        <div className="case-content">
          {isCreative && props.isFirst && (
            <>
              <h2 className="case-title subtitle" style={{ marginBottom: "0" }}>
              {t("Cases")}
              </h2>
              <hr style={{ width: "130px", margin: "10px auto" }} />
              <h2 className="case-title subtitle">{props.name}</h2>
            </>
          )}
          {isCreative && !props.isFirst && (
            <>
              <h2 className="case-title subtitle">{props.name}</h2>
            </>
          )}
          {!isCreative && !props.isFirst && (
            <h2 className="case-title subtitle">{t("Cases")}</h2>
          )}
          {!props.analytics && (
            <>
              <Swiper
                modules={[Navigation]}
                breakpoints={{
                  900: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                loop
                onSwiper={setSwiperRef}
                autoHeight
                className="new-case__smm new-case__smm-wrapper"
              >
                {props.data.map((caseItem) => (
                  <SwiperSlide
                    key={caseItem.id}
                    className="new-case__smm-slide"
                  >
                    {props.video ? (
                      <video
                        loop
                        muted
                        controls
                        className="creative-video"
                        src={caseItem.imgSrc}
                      >
                        <source src={caseItem.imgSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img src={caseItem.imgSrc} alt={caseItem.alt} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="case-next__btn" onClick={nextHandler}></div>
              <div className="case-back__btn" onClick={prevHandler}></div>
            </>
          )}
          {props.analytics && (
            <div className="case-gallery">
              <iframe
                title="1"
                width="1200"
                height="600"
                src="https://app.powerbi.com/view?r=eyJrIjoiYzllYzhiN2ItY2UwYi00MDViLTlkYzAtNTRjZDg3NWFkN2Y2IiwidCI6IjUyYTVlN2Y2LWZmMzgtNDQzYS04MzYwLWI1ZGFiZTBmMjVlZSIsImMiOjl9&pageName=ReportSection"
                allowFullScreen={true}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16 / 9',
                  maxWidth: '1200px',
                  maxHeight: '675px',
                }}
              ></iframe>
            </div>
          )}

          <SeeMoreButton />
        </div>
      </div>
    </section>
  );
};

export default Cases;
