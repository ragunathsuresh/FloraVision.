import { HiChevronRight } from "react-icons/hi";
import aglaonema from "../assets/aglaonema_hero.png";
import Button from "./Button";

function FeaturedPlantCard() {
  return (
    <div className="featured-card glass-panel">
      <img src={aglaonema} alt="Aglaonema plant" />
      <p className="featured-label">Indoor Plant</p>
      <div className="featured-name-row">
        <h3>Aglaonema plant</h3>
        <button aria-label="Next" className="icon-plain">
          <HiChevronRight className="text-[9px]" />
        </button>
      </div>
      <Button variant="outline">
        Buy Now
      </Button>
      <div className="featured-dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default FeaturedPlantCard;
