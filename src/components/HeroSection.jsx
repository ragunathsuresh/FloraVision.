import { motion } from "framer-motion";
import playIcon from "../assets/play_icon.png";
import FloatingReviewCard from "./FloatingReviewCard";
import FeaturedPlantCard from "./FeaturedPlantCard";
import Button from "./Button";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[790px] pt-[170px] z-20 max-md:min-h-[860px] max-md:pt-[120px]"
    >
      <div className="relative z-10 w-[var(--width-container)] mx-auto max-md:w-[var(--width-container-mobile)]">
        <motion.div
          className="max-w-[620px]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="m-0 text-[72px] leading-[0.98] font-bold tracking-tight max-md:text-[48px]">
            Earth's Exhale
          </h1>
          <p className="w-[545px] mt-[17px] mb-7 text-muted-text text-[13px] leading-[1.5] max-md:w-full">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>
          <div className="flex items-center gap-[18px]">
            <Button variant="outline">Buy Now</Button>
            <button
              aria-label="Play Demo"
              className="inline-flex items-center gap-[10px] border-0 bg-transparent text-white/80 text-[13px]"
            >
              <span className="w-[42px] h-[42px] grid place-items-center border border-white/80 rounded-full">
                <img src={playIcon} alt="" className="w-3.5 h-3.5 object-contain" />
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
