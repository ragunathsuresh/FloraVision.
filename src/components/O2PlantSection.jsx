import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import o2Plant from "../assets/o2_plant.png";

function O2PlantSection() {
  const [page, setPage] = useState(1);

  return (
    <section id="o2" className="site-section o2-section">
      <div>
        <SectionTitle>Our Best o2</SectionTitle>

        <div className="o2-panel glass-panel">
          <div>
            <img src={o2Plant} alt="Best O2 plant" />
          </div>

          <div className="o2-copy">
            <h3>We Have Small And Best O2 Plants Collection's</h3>
            <p>
              Oxygen-producing plants, often referred to as "O2 plants," are
              those that release oxygen into the atmosphere through the process
              of photosynthesis.
            </p>
            <p>
              Many plants can help filter out pollutants and toxins from the
              air, such as formaldehyde, benzene, and trichloroethylene. This
              makes the air cleaner and healthier to breathe.
            </p>
            <Button variant="outline">Explore</Button>

            <div className="o2-controls">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                aria-label="Previous slide"
                className="icon-plain"
              >
                <HiChevronLeft className="text-[8px]" />
              </button>
              <span>0{page}/04</span>
              <button
                onClick={() => setPage((p) => Math.min(3, p + 1))}
                aria-label="Next slide"
                className="icon-plain"
              >
                <HiChevronRight className="text-[8px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="slider-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}

export default O2PlantSection;
