import { motion } from "framer-motion";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import plantainLily from "../assets/plantain_lily.png";
import aloeTeal from "../assets/aloe_teal.png";

const trendingItems = [
  {
    id: 1,
    image: plantainLily,
    imageAlt: "Desk decoration plant",
    reverse: false,
    title: "For Your Desks Decorations",
    description: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
  },
  {
    id: 2,
    image: aloeTeal,
    imageAlt: "Aloe vera plant in teal pot",
    reverse: true,
    title: "For Your Desks Decorations",
    description: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: "Rs. 399/-",
  },
];

function TrendingSection() {
  return (
    <section id="trending" className="site-section trending-section">
      <div>
        <SectionTitle>Our Trendy plants</SectionTitle>

        <div className="trending-list">
          {trendingItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className={`trend-card glass-panel ${item.reverse ? "reverse" : ""}`}
            >
              <div className="trend-media">
                <img src={item.image} alt={item.imageAlt} />
              </div>

              <div className="trend-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="trend-price">{item.price}</span>
                <div className="mini-actions">
                  <Button variant="outline">
                    Explore
                  </Button>
                  <button
                    aria-label="Add to cart"
                    className="cart-square"
                  >
                    <HiOutlineShoppingBag />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingSection;
