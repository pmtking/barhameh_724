import { useState } from "react";
import OTPInput from "react-otp-input";
import style from "./style.module.scss";
import Button from "../../../Components/ui/Button";
import TimerComponents from "../../../Components/ui/Timer";
import { Refresh2 } from "iconsax-react";
import BgImage from "../../../assets/image/download.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../../../libs/axios";
const OtpPage = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState(localStorage.getItem("number"));

  const CheckOtpHanndler = async () => {
    try {
      setLoading(true);
      const { data } = await Api.post("/auth/otp", {
        number: number,
        code: otp,
      });
      if (data._user.role === "user") {
        setLoading(false);
        toast.success("ورود موفقیت آمیز بود");
        setTimeout(() => {
          location.replace("/");
        }, 3000);
      }
      if (data._user.role === "admin") {
        setLoading(false);
        toast.success("ورود موفقیت آمیز بود");
        setTimeout(() => {
          location.replace("/dashboard");
        }, 3000);
      }
    } catch (error) {
      toast.error("خطایی پیش امده است  لطفا مجددا تلاش نمایید.");
    }
  };

  return (
    <div className={style.otp_sms}>
      <div className={style.bg_image}>
        <img src={BgImage} alt="" className={style.bg_image_src} />
        <div className={style.bg_image_sms_box}>
          <TypeAnimation
            sequence={[
              "اوه !!", // Types 'One'
              1000, // Waits 1s
              "پیامک  تایید اومد بزار ببینم", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "چقدر این سایت خوبه  ", // Types 'Three' without deleting 'Two'
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "1em",
              display: "inline-block",
              direction: "rtl",
            }}
          />
        </div>
      </div>
      <div className={style.otp_sms_content}>
        <div className={style.otp_sms_content_header}>
          <h1>کد ورود با پیامک</h1>
          <p>کد تایید برای شماره موبایل شما ارسال شده است</p>
          <div className={style.otp_sms_content_header_content}>
            <span>{number}</span>
            <Link
              className={style.otp_sms_content_header_edit_number}
              to="/login"
            >
              ویرایش شماره
            </Link>
          </div>
        </div>
        <OTPInput
          className={style.otp_sms_content_input}
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span> </span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            border: "1px solid transparent",
            borderRadius: "8px",
            width: "60px",
            height: "54px",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
            marginLeft: "12px",
            direction: "ltr",
          }}
        />
        <div className={style.otp_sms_content_time}>
          <span>
            ارسال مجدد
            <Refresh2 />
          </span>
          <TimerComponents range={60} />
        </div>
        <Button name={"ورود"} onClick={CheckOtpHanndler} />
      </div>
    </div>
  );
};

export default OtpPage;
