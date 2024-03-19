import ProductionButton from "../../elements/production-button/ProductionButton";
import StartButton from "../../elements/start-button/StartButton";
import "./first-page.css";
import { motion } from "framer-motion";

import icon1 from "../../static/images/27.png";
import icon2 from "../../static/images/28.png";
import Popup from "../popup/Popup";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export type FirstPagePropsType = {
  data: {
    backgroundImage: string;
    mainTitle: string;
    mainText: string;
  };
  production?: boolean;
  video?: boolean;
};

const FirstPage = (props: FirstPagePropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleChangePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const titleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1.2 },
    },
  };

  const liVariants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  return (
    <section
      id="first-page"
      className={`first-content first-main-bg ${props.video ? "video-bg" : ""}`}
      style={
        props.video
          ? {}
          : {
              background: `url(${props.data.backgroundImage}) no-repeat center fixed`,
              backgroundSize: "cover",
            }
      }
    >
      {props.video && (
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={props.data.backgroundImage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="container">
        <div className="first-content__wrapper">
          <div className="first-content__section">
            <motion.h1
              className="main-title"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              {props.data.mainTitle}
            </motion.h1>
            <motion.p
              className="main-text"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              {props.data.mainText}
            </motion.p>
            <div className="main-btn btn-main">
              {props.production ? (
                <ProductionButton handleClick={handleChangePopup} />
              ) : (
                <StartButton handleClick={handleChangePopup} />
              )}
              <div className="btn-shadow"></div>
            </div>
            <ul className="main-ul__list">
              <motion.li
                initial="offscreen"
                whileInView="onscreen"
                variants={liVariants}
              >
                <div className="main-icon">
                  <img src={icon1} alt="" />
                </div>
                <h5 className="main-descrip descrip_1" style={{width: "100px"}}>
                  {t("American methods")}
                </h5>
              </motion.li>
              <motion.li
                initial="offscreen"
                whileInView="onscreen"
                variants={liVariants}
              >
                <div className="main-icon">
                  <img src={icon2} alt="" />
                </div>
                <h5 className="main-descrip descrip_2" style={{width: "100px"}}>
                  {t("Best AI-strategies")}
                </h5>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
      <Popup isOpen={isOpen} handleChangePopup={handleChangePopup} />
    </section>
  );
};

export default FirstPage;
