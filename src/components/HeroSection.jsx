import { motion } from "framer-motion";
import playIcon from "../assets/play_icon.png";
import FloatingReviewCard from "./FloatingReviewCard";
import FeaturedPlantCard from "./FeaturedPlantCard";
import Button from "./Button";

function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            Earth's Exhale
          </h1>
          <p className="hero-copy">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>
          <div className="button-row">
            <Button variant="outline">Buy Now</Button>
            <button
              aria-label="Play Demo"
              className="play-button"
            >
              <span>
                <img src={playIcon} alt="" className="play-polygon" />
              </span>
              Live Demo...
            </button>
          </div>

          <FloatingReviewCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <FeaturedPlantCard />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
