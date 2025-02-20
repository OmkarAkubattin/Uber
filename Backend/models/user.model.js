const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true, // ✅ Fixed typo
            minlength: [3, "First name must be at least 3 characters long"],
        },
        lastname: {
            type: String,
            minlength: [3, "Last name must be at least 3 characters long"],
        },
    },
    email: {
        type: String,
        required: true, // ✅ Fixed typo
        unique: true,
        minlength: [5, "Email must be at least 5 characters long"],
    },
    password: {
        type: String,
        required: true, // ✅ Fixed typo
        select: false, // ✅ Ensures password is not returned in queries
    },
    socketId: {
        type: String,
    },
});

// ✅ Fix: Corrected method name
userSchema.methods.generateAuthToken = function() {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// ✅ Fix: Added password parameter
userSchema.methods.comparePassword = async function(password) {
    const user = await this.model("user").findById(this._id).select("+password");
    return await bcrypt.compare(password, user.password);
};

// ✅ Fix: Used correct bcrypt hash function
userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;