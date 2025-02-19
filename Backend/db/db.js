const mongoose = require("mongoose");

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log("✅ Connected to Database");
    } catch (err) {
        console.error("❌ DB Connection Error:", err.message);
        process.exit(1); // Exit process if DB fails
    }
}

module.exports = connectToDb;
