import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import "./styles.scss";
import { CloseCircle, Login, TextalignJustifycenter } from "iconsax-react";
import NavLinkComponent from "../../ui/Link";
import Logo from "../../../assets/image/Logoo-barnme-7242.png";
function Navbar() {
  const navList = [
    {
      name: "صفحه اصلی ",
      path: "/",
    },
    {
      name: "بلاگ",
      path: "/blog",
    },
    {
      name: "درباره ما",
      path: "/aboutus",
    },
    {
      name: "تماس با ما",
      path: "/contactus",
    },
  ];
  const handdleOpenMenue = () => {
    const el = document.getElementById("mobile_nav");
    const mobileMenu = document.getElementById("mobile");

    if (el.className === "nav_mobile_content_open") {
      el.classList.remove("nav_mobile_content_open");
      el.classList.add("nav_mobile_content");
    } else {
      el.classList.remove("nav_mobile_content");
      el.classList.add("nav_mobile_content_open");
      mobileMenu.classList.add("nav_mobile_none");
    }
  };
  return (
    <>
      {/* navbar  */}
      <div className={style.navbar}>
        <div className={style.logo}>
          <img width={60} height={50} src={Logo} alt="" />
          <p>
            <span className={style.logo_span}>بار نامه</span>24
          </p>
        </div>
        <div className={style.navbar_items}>
          {navList.map((item, key) => {
            return (
              <>
                <NavLink
                  key={key}
                  className={style.navLink_links}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </>
            );
          })}
        </div>
        <Button type="link" href="/login" className={style.navbar_btn}>
          <Login />
          ورود
        </Button>
      </div>
      {/* mobile navbar */}
      <div className={style.navbar_mobile}>
        <div className={style.navbar_mobile_head}>
          <div className="" onClick={handdleOpenMenue}>
            <TextalignJustifycenter />
          </div>
          <div className={style.navbar_mobile_head_logo}>
            <img width={50} height={50} src={Logo} alt="" />
          </div>
        </div>
        <div className={"nav_mobile"} id="mobile">
          <div className="nav_mobile_content" id="mobile_nav">
            <div className="logo">
              <span></span>
              <div className="icon" onClick={handdleOpenMenue}>
                <CloseCircle />
              </div>
            </div>
            <div className="nav_mobile_content_item">
              {navList.map((item, key) => {
                return (
                  <>
                    <NavLinkComponent href={item.path} name={item.name} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
