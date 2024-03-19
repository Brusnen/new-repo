import "./production-button.css"
import {motion } from "framer-motion"

type StartButtonPropsType = {
  handleClick?: () => void;
};

const ProductionButton = (props: StartButtonPropsType) => {
  
  return (
    <motion.button className="btn-start production-button" onClick={props.handleClick} whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}>3.2.1... action</motion.button>
  )
}

export default ProductionButton