const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");

const registerUser = async (req, res, next) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    // Extract user input
    const { fullname, email, password } = req.body;

    // Hash Password
    const hashPassword = await userModel.hashPassword(password);

    // Create User
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
    });

    // Generate Token
    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser };
