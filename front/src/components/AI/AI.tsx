import { useTranslation } from "react-i18next";
import "./ai.css";
import { motion } from "framer-motion";

const AI = () => {
  const { t } = useTranslation();

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="main-five section-main"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="container">
        <div className="main-five__content">
          <div className="main-five__content-body">
            <h2 className="main-five__content-body__title">
              ARTIFICIAL <br /> INTELLIGENCE
            </h2>
            <p className="main-five__content-body__text">
              {t("implementingAI")}
            </p>
            <div className="main-five__content-body__flex">
              <div className="main-five__content-body__flex-bl">
                <h3 className="main-five__content-body__flex-bl__title">
                  Rocket-Power
                </h3>
                <p className="main-five__content-body__flex-bl__text">
                  {t("ultraPreciseTargetingWithAI")}
                </p>
              </div>
              <div className="main-five__content-body__flex-bl">
                <h3 className="main-five__content-body__flex-bl__title">
                  AI-Driven Strategy
                </h3>
                <p className="main-five__content-body__flex-bl__text">
                  {t("analyzingAudienceWithAI")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AI;
