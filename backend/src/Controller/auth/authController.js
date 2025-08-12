const hashPassword = require("../../hooks/hashmaker");
const generateRandomCode = require("../../hooks/randomCode");
const SendSms = require("../../hooks/sendSms");
const User = require("../../models/user");

const otpverifayController = async (req, res) => {
  const { number } = req.body;

  try {
    // Check if the user exists
    const findUser = await User.findOne({ phone: number });
    const code = generateRandomCode();

    if (findUser) {
      // User exists, send SMS with the generated code
      SendSms(number, code);
      const update = await User.findOneAndUpdate({
        phone: number,
        smscode: code,
        role: findUser.role,
      });
      return res.status(200).json({
        msg: "پیامک ارسال شد",
        data: {
          number: number,
          code: code,
        },
      });
    } else {
      // User does not exist, create a new user
      const addUser = new User({
        phone: number,
        smscode: code,
      });
      await addUser.save(); // Await the save operation
      SendSms(number, code); // Send SMS to the new user
      return res.status(201).json({
        msg: "پیامک ارسال شد",
        data: {
          number: number,
          code: code,
        },
      });
    }
  } catch (error) {
    console.error("Error in otpverifayController:", error); // Log the error for debugging
    return res.status(500).json({
      msg: "خطایی وجود دارد",
      data: error.message, // Provide a clearer error message
    });
  }
};
const checkOtpController = async (req, res) => {
  const { code, number } = req.body;
  try {
    const _user = await User.findOne({ phone: number });
    if (_user.smscode === code) {
      console.log("testtt", code);
      return res.json({
        msg: "کد درست است",
        code: code,
        number: number,
        _user,
      });
    } else {
      return res.status(301).json({
        msg: "پیامک را درست وارد کنید",
      });
    }
  } catch (error) {
    return res.status(401).json({
      msg: "خطایی در پیامک وجود دارد",
      err: error,
    });
  }
};

module.exports = {
  otpverifayController,
  checkOtpController,
};
