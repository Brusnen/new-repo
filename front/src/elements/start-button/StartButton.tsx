import "./start-button.css";
import { motion } from "framer-motion";

type StartButtonPropsType = {
  handleClick?: () => void;
};

const StartButton = (props: StartButtonPropsType) => {
  return (
    <motion.button
      className="btn-start"
      onClick={props.handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      start
    </motion.button>
  );
};

export default StartButton;
