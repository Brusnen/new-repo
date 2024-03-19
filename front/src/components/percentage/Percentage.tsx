import "./percentage.css";
import { motion } from "framer-motion";

import img33 from "../../static/images/33.png";
import img31 from "../../static/images/31.png";
import img32 from "../../static/images/32.png";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
const titleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, bounce: 0.4, type: "spring" },
  },
};

const Percentage = () => {
  const { t } = useTranslation();

  return (
    <section className="percentage">
      <div className="container">
        <div className="percent-content">
          <motion.h2
            className="space-title subtitle"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
          >
            {t("Space formula")}
          </motion.h2>
          <motion.div
            className="percentage-grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="percentage-block percentage__1__bl"
              variants={item}
            >
              <div className="percent-figure">
                <img src={img33} alt="percent" />
              </div>
              <div className="percent-info">
                <p className="percentage-text">{t("Only the best in the team")}</p>
              </div>
            </motion.div>
            <motion.div
              className="percentage-block percentage__2__bl"
              variants={item}
            >
              <div className="percent-figure">
                <img src={img31} alt="percent" />
              </div>
              <div className="percent-info">
                <p className="percentage-text smaller">{t("Take everything upon ourselves")}</p>
              </div>
            </motion.div>
            <motion.div
              className="percentage-block percentage__3__bl"
              variants={item}
            >
              <div className="percent-figure">
                <img src={img32} alt="percent" />
              </div>
              <div className="percent-info">
                <p className="percentage-text smaller">{t("Everything exactly on time")}</p>
              </div>
            </motion.div>
            <motion.div
              className="percentage-block percentage__4__bl"
              variants={item}
            >
              <div className="percent-figure">
                <img src={img31} alt="percent" />
              </div>
              <div className="percent-info">
                <p className="percentage-text smaller">{t("Bring it to the result")}</p>
              </div>
            </motion.div>
            <motion.div
              className="percentage-block percentage__5__bl"
              variants={item}
            >
              <div className="percent-figure">
                <img src={img32} alt="percent" />
              </div>
              <div className="percent-info">
                <p className="percentage-text">{t("Focus on the Client. Always!")}</p>
              </div>
            </motion.div>
            <motion.div
              className="percentage-block percentage__6__bl"
              variants={item}
            >
              <div className="percent-figure">
                <img src={img33} alt="percent" />
              </div>
              <div className="percent-info">
                <p className="percentage-text smaller">{t("Exceed expectations")}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Percentage;
