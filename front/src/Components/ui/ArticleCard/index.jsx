import { Button, Timeline } from "antd";
import styles from "./style.module.scss";

const ArticleCard = ({ image, title, desc, time }) => {
  return (
    <>
      <div className={styles.article_card}>
        <div className={styles.article_card_content}>
          <div className={styles.article_card_content_image}>
            <img
              width={350}
              src={image}
              alt=""
              className={styles.article_card_content_image_img}
            />
          </div>
          <div className={styles.article_card_content_title}>{title}</div>
          <div className={styles.article_card_content_desc}>{desc}</div>
          <div className={styles.article_card_content_footer}>
            <div className={styles.article_card_content_footer_time}>
              {time}
            </div>
            <div className={styles.article_card_content_footer_btn}>
              <Button className={styles.article_card_content_footer_btn_or}>
                ادامه مطلب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
