import { useTranslation } from "react-i18next";
import "./see-more-button.css";
import { motion } from "framer-motion";

const SeeMoreButton = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="see-more__btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a href="/creative/" className="see-more__btn-link">
        {t("See more")}
      </a>
    </motion.div>
  );
};

export default SeeMoreButton;
