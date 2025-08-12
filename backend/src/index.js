const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/index");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use("/api", router);
mongoose
  .connect("mongodb://localhost:27017/barname724")
  .then(() => {
    console.log("server is running db connented");
  })
  .catch((err) => {
    console.log("err", err);
  });
app.get("/", (req, res) => {
  return res.send("hello");
});

// request.post(
//   {
//     url: "http://ippanel.com/api/select",
//     body: {
//       op: "send",
//       uname: "gita9300440",
//       pass: "@Kk05335356",
//       message: `
//       کد ورود شما به سامانه بارنامه 724
//       کد  :${20202}
//       barnameh724.ir
//     `,
//       from: "3000505",
//       to: ["09367189805"],
//     },
//     json: true,
//   },
//   function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       //YOU‌ CAN‌ CHECK‌ THE‌ RESPONSE‌ AND SEE‌ ERROR‌ OR‌ SUCCESS‌ MESSAGE
//       console.log(response.body);
//     } else {
//       console.log("whatever you want");
//     }
//   }
// );
app.listen(8000, () => {
  console.log("server is runnig");
});
