import { Outlet } from "react-router";
import styles from "./style.module.scss";
import SidebarComponents from "../../Components/base/Sidebar";
import DashboardNa from "../../Components/base/DashboardNav";

const DashBoardLayouts = () => {
  return (
    <div className={styles.container}>
      <SidebarComponents />
      <div className={styles.main}>
        <DashboardNa />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayouts;
