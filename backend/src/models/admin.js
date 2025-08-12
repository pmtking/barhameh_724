const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Make name required
  },
  code: {
    type: Number,
    unique: true, // Ensure code is unique
    required: true, // Make code required
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false, // Make email required
    unique: true, // Ensure email is unique
    match: /.+\@.+\..+/, // Basic email format validation
  },
  username: {
    type: String,
    required: false, // Make username required
    unique: true, // Ensure username is unique
  },
  number: {
    type: String,
    require: true,
  },
});

// Create the model
const Admin = mongoose.model("Admin", AdminSchema);

// Export the model
module.exports = Admin;
