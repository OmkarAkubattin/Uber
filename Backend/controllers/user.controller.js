const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");
const BlacklistTokenModel = require("../models/backlistToken.model");

const registerUser = async (req, res, next) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    // Extract user input
    const { fullname, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });
        if(isUserAlreadyExist){
            return res.status(400).json({ message: "User already exists" });
      }

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

const loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password); // Await the function
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);

    res.status(200).json({ token, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserProfile = (req, res, next) => {
  res.status(200).json(req.user);
}

const logoutUser = async (req, res, next) => {
  res.clearCookie('token');
  const token = req.cookies.token || req.headers.authorization.split(' ')[1];

  await BlacklistTokenModel.create({token});

  res.status(200).json({ message: 'Logout successful' });
}
module.exports = { registerUser, loginUser, getUserProfile, logoutUser };
