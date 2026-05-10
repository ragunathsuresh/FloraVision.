import { FaStar } from "react-icons/fa";

function ReviewCard({ review }) {
  return (
    <div className="review-card glass-panel">
      <div className="review-head">
        <img src={review.avatar} alt={review.name} />
        <div>
          <h3>{review.name}</h3>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-[10px] ${i < review.stars ? "text-[#c8ff3d]" : "text-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p>{review.text}</p>
    </div>
  );
}

export default ReviewCard;
