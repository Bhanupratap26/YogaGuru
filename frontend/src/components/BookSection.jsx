import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";

export const BookSection = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="book-section">
      {books.map((book) => (
        <BookCard
          key={book.id}
          image={`http://localhost:5000/${book.image}`}
          BookName={book.name}
          price={book.price}
        />
      ))}
    </div>
  );
};