import "./style.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import ImaggApp from "../../../assets/image/صفحه-ثبت-بار.png";
import { useEffect } from "react";
import { Button } from "antd";
import { DocumentDownload } from "iconsax-react";
const AppBarOwner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="app_bar_owner">
        <div className="app_bar_owner_text">
          <div className="app_bar_owner_text_h1">
            <h1 data-aos={"fade-up"}>برنامه شرکت های حمل و نقل</h1>
          </div>
          <div className="app_bar_owner_text_p">
            <p data-aos={"fade-right"}>
              با کمک اپلیکیشن اعلام بار آسان بار دیگر تفاوتی ندارد در کجای ایران
              هستید و چه باری را می خواهید جا به جا کنید، با ورود به اپلیکیشن به
              سادگی می توانید بارهای خود را اعلام کرده و در کوتاه ترین زمان
              ممکن، راننده مناسب را پیدا کنید .آسان بار به منزله پل ارتباطی بین
              رانندگان و شرکت های حمل ونقل ( باربری ها) در بستر اینترنت است .
              برای ثبت بار خود همین حالا اقدام نمائید و با کلیک روی دکمه زیر
              نسبت به نصب این برنامه اقدام نمائید.
            </p>
          </div>
          <Button className="app_bar_owner_text_button">
            <DocumentDownload />
            نصب اپلیکیشن صاحبین بار
          </Button>
        </div>
        <div className="app_bar_owner__image">
          <img data-aos={"zoom-in-up"} width={500} src={ImaggApp} alt="" />
        </div>
      </div>
    </>
  );
};

export default AppBarOwner;
