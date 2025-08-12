import { Cardano } from "iconsax-react";
import styles from "./style.module.scss";
import Image1 from "../../../assets/image/Frame 387.png";
const AboutCard = ({ image, h1, h2, list, buttons }) => {
  return (
    <>
      <div className={styles.about_card}>
        <div className={styles.about_card_content}>
          <div className={styles.about_card_content_text}>
            <div className={styles.about_card_content_text_h1}>
              <h2>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .
              </h2>
            </div>
            <div className={styles.about_card_content_text_h2}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته،
              </p>
            </div>
            <div className={styles.about_card_content_text_list}>
              <div className={styles.about_card_content_text_list_item}>
                <span>
                  <Cardano size={20} />
                </span>
                <p>۱۰۰ ‌درصد مبلغ پرداختی در حساب کاربری شما شارژ می‌شود.</p>
              </div>
              <div className={styles.about_card_content_text_list_item}>
                <span>
                  <Cardano size={20} />
                </span>
                <p>۱۰۰ ‌درصد مبلغ پرداختی در حساب کاربری شما شارژ می‌شود.</p>
              </div>
              <div className={styles.about_card_content_text_list_item}>
                <span>
                  <Cardano size={20} />
                </span>
                <p>۱۰۰ ‌درصد مبلغ پرداختی در حساب کاربری شما شارژ می‌شود.</p>
              </div>
            </div>
            <div className={styles.about_card_content_text_card}>
              <div className={styles.about_card_content_text_card_item}>
                <span> 12343</span>
                <p>خدمات موفق</p>
              </div>
              <div className={styles.about_card_content_text_card_item}>
                <span> 12343</span>
                <p>خدمات موفق</p>
              </div>
              <div className={styles.about_card_content_text_card_item}>
                <span> 12343</span>
                <p>خدمات موفق</p>
              </div>
            </div>
          </div>
          <div className={styles.about_card_content_image}>
            <img
              src={Image1}
              alt=""
              className={styles.about_card_content_image_img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
