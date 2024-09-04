const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const router = express.Router();

// POST route for user registration
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with hashed password
        const userData = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User registered successfully", user: userData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
});

// POST route for user login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Compare provided password with hashed password in database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
});

// GET route to check if the API is running (for debugging purposes)
router.get("/register", async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
});
module.exports = router;
