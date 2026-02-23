import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const API = "http://localhost:5000/api/categories";

  // ===========================
  // GET ALL CATEGORIES
  // ===========================
  const fetchCategories = async () => {
    try {
      const res = await axios.get(API);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ===========================
  // CREATE CATEGORY
  // ===========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Price", Price);
    formData.append("Image", Image);

    try {
      if (editId) {
        // UPDATE
        await axios.put(`${API}/${editId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        // CREATE
        await axios.post(API, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      }

      setName("");
      setPrice("");
      setImage(null);
      setEditId(null);

      fetchCategories();
    } catch (error) {
      console.log(error);
      alert("Only Admin Can Perform This Action");
    }
  };

  // ===========================
  // DELETE CATEGORY
  // ===========================
  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${API}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchCategories();
    } catch (error) {
      console.log(error);
      alert("Only Admin Can Delete");
    }
  };

  // ===========================
  // EDIT CATEGORY
  // ===========================
  const editCategory = (category) => {
    setEditId(category._id);
    setName(category.Name);
    setPrice(category.Price);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Book Category Panel</h2>

      {/* ================= FORM ================= */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Book Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">
          {editId ? "Update" : "Add"} Category
        </button>
      </form>

      {/* ================= LIST ================= */}
      <div>
        {categories.map((cat) => (
          <div
            key={cat._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h4>{cat.Name}</h4>
            <p>₹ {cat.Price}</p>

            {cat.Image && (
              <img
                src={`http://localhost:5000/${cat.Image}`}
                alt={cat.Name}
                width="120"
              />
            )}

            <br />
            <button onClick={() => editCategory(cat)}>Edit</button>
            <button onClick={() => deleteCategory(cat._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategory;
