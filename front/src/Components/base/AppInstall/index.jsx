import style from "./style.module.scss";
import image from "../../../assets/image/صفحه-اپ-راننده.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AppInstall = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className={style.app_install}>
        <div className={style.app_install_content}>
          <div className={style.app_install_content_image}>
            <img data-aos={"zoom-in-up"} src={image} alt="" />
          </div>
          <div className={style.app_install_content_text}>
            <h1
              data-aos={"fade-up-right"}
              className={style.app_install_content_text_h1}
            >
              برنامه رانندگـــــــان
            </h1>
            <p
              data-aos={"zoom-in"}
              className={style.app_install_content_text_p}
            >
              راننده یا قهرمان عزیز شما می توانید پس از نصب برنامه رانندگان آسان
              بار بیش از ۴۰۰۰ اعلام بار روزانه را در این برنامه مشاهده نمائید و
              نسبت به حمل هر کدام که مایل هستید اقدام نمائید. فقط کافیست در
              ابتدای روز برنامه اعلام بار لحظه ای آسان بار را باز نمایید تا
              برنامه بصورت هوشمند تا پایان روز بارهای اطراف را به شما پیام دهد.
              همین حالا برای نصب اقدام نمائید.
            </p>
            <button className={style.app_install_content_button}>
              دانلود اپ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppInstall;
