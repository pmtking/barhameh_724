const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10;
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Hashing failed");
  }
};

module.exports = hashPassword;
