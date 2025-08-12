import styles from "./style.module.scss";
import video from "../../../assets/image/freepik_1327462_0ijz.mp4";
import CardColumn from "../../ui/TabelColumn";
import { Calendar, Location, LocationTick } from "iconsax-react";
import { Button } from "antd";
const LastBarSection = () => {
  return (
    <>
      <div className={styles.last_bar}>
        <div className={styles.last_bar_header}>
          <h1>مشاهده جدید ترین بارهای آسان‌بار</h1>
          <p>
            آخرین بارهای ثبت شده در سامانه حمل بار اینترنتی آسان بار را مشاهده
            نمایید.
          </p>
        </div>
        <div className={styles.last_bar_video}>
          <video
            autoPlay
            loop
            width={1280}
            className={styles.last_bar_video_org}
            src={video}
          ></video>
          <div className={styles.last_bar_tabel}>
            <div className={styles.last_bar_tabel_header}>
              <div className={styles.last_bar_tabel_header_span}>
                <span>
                  <Calendar color="#fff" />
                </span>
                <p>تاریخ ثبت </p>
              </div>
              <div className={styles.last_bar_tabel_header_span}>
                <span>
                  {" "}
                  <Location color="#fff" />
                </span>
                <p> مبدا </p>
              </div>
              <div className={styles.last_bar_tabel_header_span}>
                <span>
                  <LocationTick color="#fff" />
                </span>
                <p> مقصد </p>
              </div>
              <div className={styles.last_bar_tabel_header_span}>
                <span>
                  <Calendar color="#fff" />
                </span>
                <p>تاریخ ثبت </p>
              </div>
              <div className={styles.last_bar_tabel_header_span_no}>
                <span>
                  <Calendar color="#fff" />
                </span>
                <p>تاریخ ثبت </p>
              </div>
            </div>
            <CardColumn
              registrationDdate={"12"}
              origin={"اردکان"}
              destination={"تهران"}
              fleet={"نیسان"}
              distance={"474 km"}
            />
            <CardColumn
              registrationDdate={"12"}
              origin={"اردکان"}
              destination={"تهران"}
              fleet={"نیسان"}
              distance={"474 km"}
            />
            <CardColumn
              registrationDdate={"12"}
              origin={"اردکان"}
              destination={"تهران"}
              fleet={"نیسان"}
              distance={"474 km"}
            />
            <CardColumn
              registrationDdate={"12"}
              origin={"اردکان"}
              destination={"تهران"}
              fleet={"نیسان"}
              distance={"474 km"}
            />
            <CardColumn
              registrationDdate={"12"}
              origin={"اردکان"}
              destination={"تهران"}
              fleet={"نیسان"}
              distance={"474 km"}
            />
            <CardColumn
              registrationDdate={"12"}
              origin={"اردکان"}
              destination={"تهران"}
              fleet={"نیسان"}
              distance={"474 km"}
            />

            <Button className={styles.Button}>مشاهده بار های بیشتر</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastBarSection;
