export const BookCard = ({ image, BookName, price, highlight }) => {
  return(
    <div className="Book-Card">
        <img src={image} alt="book" />
        <div className="Book-info">
            <p className="Book-name">
                {highlight(BookName)}
            </p>
            <p className="price">{price}</p>
        </div>
    </div>
  );
};

