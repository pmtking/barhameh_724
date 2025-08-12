const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: false,
  },
  phone: {
    type: String,
    require: true,
  },
  smscode: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
