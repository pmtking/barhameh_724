const express = require("express");
const {
  registerController,
  otpverifayController,
  checkOtpController,
} = require("../Controller/auth/authController");

const router = express.Router();

router.post("/login", otpverifayController);
router.post("/otp", checkOtpController);

module.exports = router;
