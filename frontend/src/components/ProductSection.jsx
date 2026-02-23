import { useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductSection = () => {
  const products = [
    {
      image: "/assests/Product-image/img1.avif",
      ProductName: "Yoga Mat Pro",
      price: "499"
    },
    {
      image: "/assests/Product-image/img1.avif",
      ProductName: "Meditation Cushion",
      price: "699"
    },
    {
      image: "/assests/Product-image/img1.avif",
      ProductName: "Yoga Blocks",
      price: "299"
    },
    {
      image: "/assests/Product-image/img1.avif",
      ProductName: "Yoga Strap",
      price: "199"
    }
  ];

  const [search, setSearch] = useState("");

  // 🔍 Filter products
  const filteredProducts = products.filter((product) =>
    product.ProductName.toLowerCase().includes(search.toLowerCase())
  );

  // ✨ Highlight matched text
  const highlightText = (text) => {
    if (!search) return text;

    const parts = text.split(new RegExp(`(${search})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="Product-Section">
      {/* Header + Search */}
      <div className="product-header">
        <h2 className="section-title">Our Products</h2>

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="Product-row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              highlight={highlightText}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </section>
  );
};
