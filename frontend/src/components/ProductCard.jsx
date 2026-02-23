export const ProductCard = ({ image, ProductName, price, highlight }) => {
  return (
    <div className="Product-Card">
      <img src={image} alt="Product" />

      <div className="Product-info">
        <p className="Product-name">
          {highlight(ProductName)}
        </p>

        <p className="price">{price}</p>
      </div>
    </div>
  );
};
