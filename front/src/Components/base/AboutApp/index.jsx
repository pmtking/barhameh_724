import Card from "../../ui/Card";
import LottiLoader from "../../ui/LottiLoader";
import styles from "./style.module.scss";
import image1 from "../../../assets/image/صدور بارنامه آنلاین.png";
import image2 from "../../../assets/image/رزرو بار برگشتی.png";
import image3 from "../../../assets/image/اطلاع از بارهای اطراف.png";
import image4 from "../../../assets/image/ثبت بار آسان.png";
import image5 from "../../../assets/image/دسترسی به هزاران راننده فعال.png";
import { motion } from "framer-motion";
import animation1 from "../../../assets/lottis/Animation - 1725781665990.json";
import Aos from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AboutAppContent from "../AboutAppContent";

const AboutApp = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const facilities = [
    {
      title: "صدور بارنامه آنلاین",
      desc: "درخواست صدور بارنامه و استعلام هزینه بارنامه متناسب با بار در هر نقطه از ایران",
      image: image1,
    },
    {
      title: "رزرو بار برگشت",
      desc: "امکان رزرو بار از مقصد بار فعلی به منظور کمترین هدررفت وقت و بارگیری سریعتر امکان پذیر می باشد",
      image: image2,
    },
    {
      title: "  اطلاع از بارهای اطراف ",
      desc: "امکان مشاهده بارهای متناسب با ناوگان فرد در کمترین فاصله ممکن از طریق پیامک برنامه",
      image: image3,
    },
    {
      title: "ثبت بار آسان",
      desc: "ثبت بار در کمتر از 10 ثانیه به کمک بزرگترین سامانه حمل بار آنلاین در کشور",
      image: image4,
    },
    {
      title: "دسترسی به بیش از 180 هزار راننده",
      desc: "حضور بیش از 180 هزار راننده فعال با ناوگان های مختلف و امکان حمل بار آنلاین از هر نقطه در کشور",
      image: image5,
    },
    {
      title: "پشتیبانی فعال",
      desc: "پیگیری درخواست رانندگان و صاحبین کالا به صورت روزانه",
      image: image5,
    },
  ];
  return (
    <>
      <motion.div className={styles.about_app}>
        <div className={styles.about_app_header}>
          <h1 data-aos={"zoom-out-down"}>
            امکانات و خدمات سامانه حمل بار اینترنتی بارنامه 724
          </h1>
          <p data-aos={"zoom-out-down"}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لاز
          </p>
        </div>

        <AboutAppContent />
      </motion.div>
    </>
  );
};

export default AboutApp;
