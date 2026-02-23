import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {

  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Image, setImage] = useState(null);

  const [books, setBooks] = useState([]);

  const token = localStorage.getItem("token");

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/api/books");
    setBooks(res.data);
  };

  useEffect(()=>{
    fetchBooks();
  },[]);




  /* CREATE BOOK */
  const addBook = async () => {

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Price", Price);
    formData.append("Image", Image);

    await axios.post(
      "http://localhost:5000/api/books",
      formData,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );

    alert("Book Added");
    fetchBooks();
  };



  /* DELETE */
  const deleteBook = async(id)=>{
    await axios.delete(
      `http://localhost:5000/api/books/${id}`,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );

    fetchBooks();
  };


  return (
    <div style={{padding:"40px"}}>

      <h2>Manage Books CMS</h2>

      <input
        placeholder="Book Name"
        onChange={(e)=>setName(e.target.value)}
      />
      <br/><br/>

      <input
        placeholder="Price"
        onChange={(e)=>setPrice(e.target.value)}
      />
      <br/><br/>

      <input
        type="file"
        onChange={(e)=>setImage(e.target.files[0])}
      />
      <br/><br/>

      <button onClick={addBook}>
        Add Book
      </button>


      <hr/>

      <h3>All Books</h3>

      {
        books.map((b)=>(
          <div key={b._id} style={{marginBottom:"20px"}}>
            <p>{b.Name} - ₹{b.Price}</p>

            <img
              src={`http://localhost:5000/${b.Image}`}
              width="120"
            />

            <br/>

            <button onClick={()=>deleteBook(b._id)}>
              Delete
            </button>

          </div>
        ))
      }

    </div>
  );
};

export default AdminDashboard;
