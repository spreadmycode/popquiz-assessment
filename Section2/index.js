// JavaScript code:
const express = require("express");
const app = express();

// Database setup
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "weidy";

// Middleware setup
app.use(express.json());

// API endpoint for user registration
app.post("/register", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    // Check if user already exists in database
    const user = await db
      .collection("users")
      .findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Insert new user into database
    const newUser = { email: req.body.email, password: req.body.password };
    await db.collection("users").insertOne(newUser);
    res.status(200).json({ message: "User registered successfully" });

    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
