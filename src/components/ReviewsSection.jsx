import SectionTitle from "./SectionTitle";
import ReviewCard from "./ReviewCard";
import avatarShelly from "../assets/avatar_shelly.png";
import avatarLula from "../assets/avatar_lula.jpg";
import avatarCarol from "../assets/avatar_carol.png";

const reviews = [
  {
    id: 1,
    name: "Shelly Russel",
    avatar: avatarShelly,
    stars: 4,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: 2,
    name: "Lula Rolfson",
    avatar: avatarLula,
    stars: 4,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    name: "Carol Huels",
    avatar: avatarCarol,
    stars: 4,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment, my plant collection has never looked better!",
  },
];

function ReviewsSection() {
  return (
    <section id="reviews" className="site-section reviews-section">
      <div>
        <SectionTitle>Customer Review</SectionTitle>
        <div className="review-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
