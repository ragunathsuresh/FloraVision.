import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import products from "../data/products";

function TopSellingSection() {
  return (
    <div className="top-section-bg">
      <section id="top-selling" className="site-section top-section">
        <SectionTitle>Our Top Selling Plants</SectionTitle>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TopSellingSection;
