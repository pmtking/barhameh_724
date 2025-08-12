import styles from "./style.module.scss";
import Aos from "aos";
import PropTypes from "prop-types";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Card = ({ image, title, desc, onClick }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className={styles.card} onClick={onClick}>
        <div className={styles.card_image}>
          <img data-aos={"zoom-in"} width={40} src={image} alt="" />
        </div>
        <div
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={styles.card_title}
        >
          {" "}
          {title}
        </div>
      </div>
    </>
  );
};

export default Card;
