const bcrypt = require('bcrypt');
const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {
    // Validate if all required fields are provided
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are required: firstname, lastname, email, password, color, plate, capacity, vehicleType");
    }

    // Check if the email is already registered
    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
        throw new Error("Email is already in use");
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(password, hashedPassword);
    
    // Ensure capacity is a number
    const numericCapacity = Number(capacity);
    if (isNaN(numericCapacity) || numericCapacity <= 0) {
        throw new Error("Capacity must be a valid positive number");
    }

    // Create the new captain
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password: hashedPassword,  // Store the hashed password
        vehicle: {
            color,
            plate,
            capacity: numericCapacity, // Ensure it's stored as a number
            vehicleType,
        },
    });

    return captain;
};
