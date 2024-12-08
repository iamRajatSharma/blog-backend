const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { LoginInput, SignUpInput } = require("../utils/inputValidator");

// User signup
const signup = async (req, res) => {
    try {
        const { username, password } = req.body;

        // validate input data
        const validateInput = SignUpInput.safeParse(req.body)
        if (!validateInput.success) return res.status(404).json(validateInput.error.issues)

        // check user exists or not
        checkUser = await User.findOne({ username: username })
        if (checkUser) return res.status(400).json({ message: "Username is already registered with us" })

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// User login
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const validateInput = LoginInput.safeParse(req.body)
        if (!validateInput.success) return res.status(404).json(validateInput.error.issues)

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: "User not found!" });

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials!" });

        // Generate a token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    login, signup
}