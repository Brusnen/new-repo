import { motion } from "framer-motion";
import "./space-services.css";
import PageAnalytics from "./space-services-items/PageAnalytics";
import PageBranding from "./space-services-items/PageBranding";
import PageCreative from "./space-services-items/PageCreative";
import PageProduction from "./space-services-items/PageProduction";
import PageSmm from "./space-services-items/PageSmm";
import PageTarget from "./space-services-items/PageTarget";
import PageWebdesign from "./space-services-items/PageWebdesign";

const SpaceServices = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3 }
    },
  };

  return (
    <section id="space-services" className="all-pages">
      <motion.div className="page-service page-smm" variants={itemVariants} initial="hidden" whileInView="visible">
        <PageSmm />
      </motion.div>

      <motion.div className="page-service page-target" variants={itemVariants} initial="hidden" whileInView="visible">
        <PageTarget />
      </motion.div>

      <motion.div className="page-service page-production" variants={itemVariants} initial="hidden" whileInView="visible">
        <PageProduction />
      </motion.div>

      <motion.div className="page-service page-branding" variants={itemVariants} initial="hidden" whileInView="visible">
        <PageBranding />
      </motion.div>

      <motion.div className="page-service page-webdesign" variants={itemVariants} initial="hidden" whileInView="visible">
        <PageWebdesign />
      </motion.div>

      <motion.div className="page-service page-analitics" variants={itemVariants} initial="hidden" whileInView="visible">
        <PageAnalytics />
      </motion.div>

      <motion.div className="page-service page-creative" variants={itemVariants} initial="hidden" whileInView="visible">
        <PageCreative />
      </motion.div>
    </section>
  );
};

export default SpaceServices;
