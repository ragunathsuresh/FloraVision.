import { FaStar } from "react-icons/fa";
import avatarRonnie from "../assets/avatar_ronnie.png";

function FloatingReviewCard() {
  return (
    <div className="floating-review glass-panel">
      <div className="floating-review-head">
        <img
          src={avatarRonnie}
          alt="Ronnie Hamill"
        />
        <div>
          <p className="floating-review-name">Ronnie Hamill</p>
          <div className="stars">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-[10px]" />
            ))}
            <FaStar className="text-[10px] text-white/30" />
          </div>
        </div>
      </div>
      <p className="floating-review-text">
        I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
      </p>
    </div>
  );
}

export default FloatingReviewCard;
