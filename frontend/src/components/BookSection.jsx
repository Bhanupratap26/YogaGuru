import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";

export const BookSection = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://yogaguru-0tj2.onrender.com/api/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="book-section">
      {books.map((book) => (
        <BookCard
          key={book.id}
          image={`http://yogaguru-0tj2.onrender.com/${book.image}`}
          BookName={book.name}
          price={book.price}
        />
      ))}
    </div>
  );
};