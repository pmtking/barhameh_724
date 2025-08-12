import { Button, Input } from "antd";
import styles from "./style.module.scss";

import Lottie from "lottie-react";
import animation from "../../../assets/lottis/Animation - 1725781665990.json";
import Api from "../../../libs/axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  // loding
  const [loading, setLoading] = useState(false);

  const [phone, setPhone] = useState();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { data } = await Api.post("/auth/login", { number: phone });
      if (data) {
        setLoading(false);

        toast.success("کد تایید برای شما ارسال شد");
        setTimeout(() => {
          location.replace("/otp");
        }, 3000);
        localStorage.setItem("number", phone);
      }
    } catch (error) {}
  };

  return (
    <div className={styles.login_content}>
      <Toaster />
      <div className={styles.login}>
        <form action="" className={styles.login_button}>
          <div className={styles.login_h1}>
            <h1> ورود | ثبت‌نام</h1>
            <span>سلام!</span>
            <h2 className={styles.login_button_h1}>
              شماره تماس خود را وارد کنید
            </h2>
          </div>
          <Input
            count={{
              show: true,
              max: 11,
              min: 11,
            }}
            placeholder="09000000000"
            onChange={(e) => setPhone(e.target.value)}
          />

          <Button
            loading={loading}
            onClick={handleLogin}
            type="button"
            className={styles.login_btn}
          >
            ثبت نام
          </Button>
        </form>
      </div>
      <Lottie
        animationData={animation}
        className={styles.login_content_lotii}
      />
    </div>
  );
};

export default Login;
