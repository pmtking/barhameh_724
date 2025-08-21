import { NotificationBing } from "iconsax-react";
import style from "./styles.module.scss";
const IndexDashboard = () => {
  return (
    <>
      <main className={style.dashboard}>
        <div className={style.dashboard_content}>
          <div className={style.dashboard_content_header}>
            <h1>خوش آمدید، فاطمه کاظمی!</h1>
            <span className={style.dashboard_content_header_span}>
              <NotificationBing color="#aaa" />2 پیام و 15 تسک جدید دارید
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexDashboard;
