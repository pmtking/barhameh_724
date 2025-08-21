import { useState } from "react";
import style from "./style.module.scss";
import Imagelogo from "../../../assets/image/Logoo-barnme-7242.png";
import { Notification } from "iconsax-react";
import CardUserComponents from "../../ui/UserCard";
import userImage from "../../../assets/image/user.jpg";
const DashboardNa = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // عدد دلخواه

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={style.dashboard_nav}>
        <div className={style.dashboard_nav__right}>
          <img src={Imagelogo} alt="logo" width={50} />
        </div>
        <div className={style.dashboard_nav__left}>
          <div className={style.notification_wrapper} onClick={toggleModal}>
            <Notification style={{ cursor: "pointer" }} />
            {notificationCount > 0 && (
              <span className={style.badge}>{notificationCount}</span>
            )}
          </div>
          <CardUserComponents img={userImage} name={"سارا"} role={'مدیر'} />

        </div>
      </div>

      {/* Modal */}
      <div className={`${style.modal} ${isModalOpen ? style.open : ""}`}>
        <div className={style.modal_content}>
          <h3>اعلان‌ها</h3>
          <p>شما هیچ اعلان جدیدی ندارید.</p>
          <button onClick={toggleModal}>بستن</button>
        </div>
      </div>
    </>
  );
};

export default DashboardNa;
