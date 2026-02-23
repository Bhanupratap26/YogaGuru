import { BookCard } from "./BookCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const BookSection = () => {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");



  /* FETCH BOOKS FROM DATABASE */
  const fetchBooks = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/books"
    );

    setBooks(res.data);
  };


  useEffect(()=>{
    fetchBooks();
  },[]);



  /* SEARCH FILTER */
  const filteredBooks = books.filter((book) =>
    book.Name.toLowerCase().includes(search.toLowerCase())
  );



  /* HIGHLIGHT TEXT */
  const highlightText = (text) => {
    if (!search) return text;

    const parts = text.split(
      new RegExp(`(${search})`, "gi")
    );

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase()
        ? (
          <span key={index} className="highlight">
            {part}
          </span>
        )
        : part
    );
  };



  return(
    <section className="Book-section">

      <div className="book-header">
        <h2 className="section-title">Our Books</h2>

        <input
          type="text"
          placeholder="Search Book.."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>



      <div className="book-row">

        {filteredBooks.map((book)=>(
          <BookCard
            key={book._id}
            image={`http://localhost:5000/${book.Image}`}
            BookName={book.Name}
            price={book.Price}
            highlight={highlightText}
          />
        ))}

      </div>

    </section>
  );
};
