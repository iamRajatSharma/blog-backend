const mongoose = require("mongoose");
const { z } = require("zod")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
