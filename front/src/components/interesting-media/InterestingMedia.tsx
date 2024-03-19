import { Link } from "react-scroll";
import ProductionButton from "../../elements/production-button/ProductionButton";
import StartButton from "../../elements/start-button/StartButton";
import "./interesting-media.css";
import { motion } from "framer-motion";

import icon1 from "../../static/images/si1.png";
import icon2 from "../../static/images/si2.png";
import icon3 from "../../static/images/si3.png";
import icon4 from "../../static/images/si4.png";
import Popup from "../popup/Popup";
import { useState } from "react";

export type InterestingMediaPropsType = {
  data: {
    backgroundImage: string;
    mainTitle: string;
    description?: string;
    mainTextLong: string;
    mainTextShort?: string;
  };
  firstPage?: boolean;
  production?: boolean;
  video?: boolean;
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.05, duration: 0.65, ease: "easeIn" },
  },
};
const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: "easeIn" },
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

const InterestingMedia = (props: InterestingMediaPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="interesting-media">
      <div className="big-container">
        <div
          className={`first-content first-main-bg ${
            props.video ? "video-bg" : ""
          }`}
          style={
            props.video
              ? {
                  height: "100vh",
                }
              : {
                  background: `url(${props.data.backgroundImage}) center no-repeat`,
                  backgroundSize: "cover",
                  height: "100vh",
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
                opacity: 0.3,
              }}
            >
              <source src={props.data.backgroundImage} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="container">
            <div className="interesting-media__section">
              <motion.h2
                className="interesting-media-title"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
              >
                {props.data.mainTitle}
              </motion.h2>
              <p
                className="main-descrip"
                style={{
                  fontSize: "16px",
                  marginBottom: "40px",
                  marginTop: "-15px",
                  lineHeight: "1.2rem",
                }}
              >
                {props.data.description}
              </p>
              <div className="interesting-media__info">
                <motion.p
                  className="interesting-media-text str-long"
                  variants={titleVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  {props.data.mainTextLong}
                </motion.p>
                {props.data.mainTextShort && (
                  <motion.p
                    className="interesting-media-text str-short"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {props.data.mainTextShort}
                  </motion.p>
                )}
              </div>
              {props.firstPage && (
                <ul className="media-list">
                  <li>
                    <a
                      href="https://www.instagram.com/gimini.digital?igsh=ODA1NTc5OTg5Nw=="
                      className="media-link"
                      target="_blank"
                    >
                      <img src={icon1} alt="link" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@gimini.x?_t=8jPLpwfKYdR&_r=1"
                      className="media-link"
                      target="_blank"
                    >
                      <img src={icon2} alt="link" />
                    </a>
                  </li>
                  <li>
                    <a href="" className="media-link" target="_blank">
                      <img src={icon3} alt="link" />
                    </a>
                  </li>
                  <li>
                    <a href="" className="media-link" target="_blank">
                      <img src={icon4} alt="link" />
                    </a>
                  </li>
                </ul>
              )}
              {!props.firstPage && (
                <motion.div
                  className="interesting-media-btn"
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                    {props.production ? (
                      <ProductionButton handleClick={handleChangePopup} />
                    ) : (
                      <StartButton handleClick={handleChangePopup} />
                    )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isOpen} handleChangePopup={handleChangePopup} />
    </section>
  );
};

export default InterestingMedia;
