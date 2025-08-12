import { Button } from "antd";
import styles from "./style.module.scss";
import ArticleCard from "../../ui/ArticleCard";
import ImageCard from "../../../assets/image/image 19.png";
const ActivitiesSectin = () => {
  return (
    <>
      <div className={styles.activate_section}>
        <div className={styles.activate_section_header}>
          <h1>مشاهده جدید ترین مقالات آسان‌بار</h1>
          <p>
            آخرین بارهای ثبت شده در سامانه حمل بار اینترنتی آسان بار را مشاهده
            نمایید.
          </p>
          <Button className={styles.activate_section_header_button}>
            مشاهده بیشتر
          </Button>
        </div>
        <div className={styles.activate_section_content}>
          <ArticleCard
            image={ImageCard}
            title={
              "ثبت و صدور بارنامه آنلاین (اینترنتی) به کمک راهنمایی جامع و اختصاصی در کمتر از ۵ دقیقه!!!"
            }
            desc={
              "ثبت و صدور بارنامه آنلاین (اینترنتی) به کمک راهنمایی جامع و اختصاصی در کمتر از ۵ دقیقه!!!"
            }
            time={"10 روز پیش"}
          />
          <ArticleCard
            image={ImageCard}
            title={
              "ثبت و صدور بارنامه آنلاین (اینترنتی) به کمک راهنمایی جامع و اختصاصی در کمتر از ۵ دقیقه!!!"
            }
            desc={
              "ثبت و صدور بارنامه آنلاین (اینترنتی) به کمک راهنمایی جامع و اختصاصی در کمتر از ۵ دقیقه!!!"
            }
            time={"10 روز پیش"}
          />
          <ArticleCard
            image={ImageCard}
            title={
              "ثبت و صدور بارنامه آنلاین (اینترنتی) به کمک راهنمایی جامع و اختصاصی در کمتر از ۵ دقیقه!!!"
            }
            desc={
              "ثبت و صدور بارنامه آنلاین (اینترنتی) به کمک راهنمایی جامع و اختصاصی در کمتر از ۵ دقیقه!!!"
            }
            time={"10 روز پیش"}
          />
        </div>
      </div>
    </>
  );
};

export default ActivitiesSectin;
