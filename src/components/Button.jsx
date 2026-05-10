import { motion } from "framer-motion";

function Button({ children, variant = "outline", onClick, className = "", type = "button" }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`plant-button plant-button-${variant} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
