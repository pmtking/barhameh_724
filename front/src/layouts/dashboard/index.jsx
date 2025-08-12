import { Outlet } from "react-router";
import styles from "./style.module.scss";
import SidebarComponents from "../../Components/base/Sidebar";

const DashBoardLayouts = () => {
  return (
    <div className={styles.container}>
      <SidebarComponents />
      <Outlet />
    </div>
  );
};

export default DashBoardLayouts;
