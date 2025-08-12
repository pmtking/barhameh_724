import styles from "./styles.module.scss";
const ActivitySection = () => {
  return (
    <>
      <div className={styles.activity_section}>
        <div className={styles.activity_section_content_header}>
          <h1>نگاهی به فعالیت بار نامه724 </h1>
          <p>
            آخرین بارهای ثبت شده در سامانه حمل بار اینترنتی آسان بار را مشاهده
            نمایید.
          </p>
        </div>
        <div className={styles.activity_section_content}>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default ActivitySection;
