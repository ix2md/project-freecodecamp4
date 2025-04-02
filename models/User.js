const mongoose = require("mongoose");

// const { ObjectId } = mongoose.Schema;

// Created User schema
const UserSchema = mongoose.Schema({ username: {
    type: String,
    required: true,
    unique: true
} });

// Exported the User schema
module.exports = mongoose.model("User", UserSchema);