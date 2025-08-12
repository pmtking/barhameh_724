import LottiLoader from "../../ui/LottiLoader";
import styles from "./style.module.scss";
import image1 from "../../../assets/image/صدور بارنامه آنلاین.png";
import image2 from "../../../assets/image/رزرو بار برگشتی.png";
import image3 from "../../../assets/image/اطلاع از بارهای اطراف.png";
import image4 from "../../../assets/image/ثبت بار آسان.png";
import image5 from "../../../assets/image/دسترسی به هزاران راننده فعال.png";
import animation1 from "../../../assets/lottis/Animation - 1725781665990.json";
import Card from "../../ui/Card";
import { useState } from "react";
import AboutAppContentButton from "../../AboutAppContentButtom";
const AboutAppContent = () => {
  const facilities = [
    {
      title: "صدور بارنامه آنلاین",
      desc: "درخواست صدور بارنامه و استعلام هزینه بارنامه متناسب با بار در هر نقطه از ایران",
      image: image1,
      id: 1,
    },
    {
      title: "رزرو بار برگشت",
      desc: "امکان رزرو بار از مقصد بار فعلی به منظور کمترین هدررفت وقت و بارگیری سریعتر امکان پذیر می باشد",
      image: image2,
      id: 2,
    },
    {
      title: "  اطلاع از بارهای اطراف ",
      desc: "امکان مشاهده بارهای متناسب با ناوگان فرد در کمترین فاصله ممکن از طریق پیامک برنامه",
      image: image3,
      id: 3,
    },
    {
      title: "ثبت بار آسان",
      desc: "ثبت بار در کمتر از 10 ثانیه به کمک بزرگترین سامانه حمل بار آنلاین در کشور",
      image: image4,
      id: 4,
    },
    {
      title: "دسترسی به راننده",
      desc: "حضور بیش از 180 هزار راننده فعال با ناوگان های مختلف و امکان حمل بار آنلاین از هر نقطه در کشور",
      image: image5,
      id: 5,
    },
    {
      title: "پشتیبانی فعال",
      desc: "پیگیری درخواست رانندگان و صاحبین کالا به صورت روزانه",
      image: image5,
      id: 6,
    },
  ];
  const [idContent, setIdContent] = useState(1);

  return (
    <>
      <div className={styles.about_app_content}>
        <div className={styles.about_app_content_box}>
          {facilities.map((item) => {
            return (
              <>
                <Card
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  onClick={() => setIdContent(item.id)}
                />
              </>
            );
          })}
        </div>
      </div>
      <AboutAppContentButton id={idContent} />
    </>
  );
};

export default AboutAppContent;
