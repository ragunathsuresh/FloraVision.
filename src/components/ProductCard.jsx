import { motion } from "framer-motion";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(158,255,0,0.1)" }}
      transition={{ duration: 0.25 }}
      className="product-card glass-panel"
    >
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-bottom">
        <span className="product-price">{product.price}</span>
        <button
          aria-label={`Add ${product.name} to cart`}
          className="cart-square"
        >
          <HiOutlineShoppingBag />
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
