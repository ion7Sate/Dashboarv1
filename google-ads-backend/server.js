const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Pentru a încărca variabilele din fișierul .env

const app = express();
const port = process.env.PORT || 3003;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conectare la MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Rute de test
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Endpoint de test pentru MongoDB
app.get("/test-db", async (req, res) => {
  try {
    // Testăm conectarea prin obținerea bazelor de date disponibile
    const databases = await mongoose.connection.db.admin().listDatabases();
    res.status(200).json({ databases });
  } catch (err) {
    console.error("Error fetching databases:", err);
    res.status(500).json({ message: "Failed to connect to the database" });
  }
});

// Pornire server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
