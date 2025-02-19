// Load Environment Variables at the Very Top
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");

const app = express();

connectToDb()

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// User Routes
app.use('/users', userRoutes);

module.exports = app;
