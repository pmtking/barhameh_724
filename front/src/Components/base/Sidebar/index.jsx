import { summary } from "framer-motion/client";
import style from "./style.module.scss";
import { Home, Teacher } from "iconsax-react";
import { NavLink } from "react-router-dom";

const SidebarComponents = () => {
  const sidebarItem = [
    {
      name: "خانه",
      path: "./",
      icon: <Home />,
    },
    {
      name: "افزودن مقاله",
      path: "./",
      icon: <Teacher />,
    },
    {
      name: "خانه",
      path: "./",
      icon: <Home />,
    },
  ];
  return (
    <>
      <div className={style.sibdebar}>
        <div className={style.sidebar_content}>
          <div className={style.sidebar_content_logo}>
            <p>barnameh24</p>
          </div>
          <div className={style.sidebar_content_items}>
            {sidebarItem.map((item, key) => {
              return (
                <>
                  <NavLink
                    className={`${style.sidebar_content_item}   `}
                    to={item.path}
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </NavLink>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarComponents;
