import { Outlet } from "react-router";
import Navbar from "../../Components/base/navbar";
import style from "./style.module.scss";
import Footer from "../../Components/base/Footer";
import { Toaster } from "react-hot-toast";
const MainLayouts = () => {
  return (
    <main className={style.main}>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayouts;
