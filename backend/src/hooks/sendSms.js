const request = require("request");
const SendSms = (number, code) => {
  request.post(
    {
      url: "http://ippanel.com/api/select",
      body: {
        op: "pattern",
        user: "gita9300440",
        pass: "@Kk05335356",
        fromNum: "3000505",
        toNum: number,
        patternCode: "nyn6uqgmmelfn2i",
        inputData: [{ "verification-code": code }, { name: "bmw" }],
      },
      json: true,
    },
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        //YOU‌ CAN‌ CHECK‌ THE‌ RESPONSE‌ AND SEE‌ ERROR‌ OR‌ SUCCESS‌ MESSAGE
        console.log(response.body);
        console.log("code : ", code);
      } else {
        console.log("whatever you want");
      }
    }
  );
};

module.exports = SendSms;
