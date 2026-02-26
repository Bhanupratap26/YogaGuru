const express = require("express");
const router = express.Router();
const pool = require("../config/db");

/* CREATE BOOK */
router.post("/", async (req, res) => {
  try {
    const { Name, Price, Image } = req.body;

    const result = await pool.query(
      "INSERT INTO books (name, price, image) VALUES ($1,$2,$3) RETURNING *",
      [Name, Price, Image]
    );

    res.json(result.rows[0]);

  } catch (err) {
    res.status(500).json(err.message);
  }
});

/* READ BOOKS */
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM books ORDER BY id DESC");
  res.json(result.rows);
});

/* UPDATE BOOK */
router.put("/:id", async (req, res) => {
  const { Name, Price, Image } = req.body;

  const result = await pool.query(
    "UPDATE books SET name=$1, price=$2, image=$3 WHERE id=$4 RETURNING *",
    [Name, Price, Image, req.params.id]
  );

  res.json(result.rows[0]);
});

/* DELETE BOOK */
router.delete("/:id", async (req, res) => {
  await pool.query("DELETE FROM books WHERE id=$1", [req.params.id]);
  res.json("Deleted");
});

module.exports = router;