import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrendingSection from "../components/TrendingSection";
import TopSellingSection from "../components/TopSellingSection";
import ReviewsSection from "../components/ReviewsSection";
import O2PlantSection from "../components/O2PlantSection";
import Footer from "../components/Footer";
import heroBgTree from "../assets/backgroundTree.jpg";

function Home() {
  return (
    <div className="site-shell">
      <div 
        className="hero-trending-wrapper"
        style={{ backgroundImage: `url(${heroBgTree})` }}
      >
        <Navbar />
        <HeroSection />
        <TrendingSection />
      </div>
      <TopSellingSection />
      <ReviewsSection />
      <O2PlantSection />
      <Footer />
    </div>
  );
}

export default Home;
