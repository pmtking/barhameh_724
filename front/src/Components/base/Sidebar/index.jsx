import { useState } from "react";
import {
  Home,
  Teacher,
  SidebarBottom,
  SidebarRight,
  SidebarLeft,
} from "iconsax-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import style from "./style.module.scss";

const SidebarComponents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItem = [
    { name: "خانه", path: "/", icon: <Home /> },
    { name: "افزودن مقاله", path: "/add-article", icon: <Teacher /> },
    { name: "خانه دوباره", path: "/home", icon: <Home /> },
  ];

  return (
    <motion.div
      className={style.sibdebar}
      animate={{ width: isOpen ? "100%" : "70px" }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <div className={style.sidebar_content}>
        <div className={style.sidebar_content_logo}>
          {isOpen && <span>barnamhe 724</span>}
          {isOpen && (
            <SidebarRight
              onClick={() => setIsOpen(!isOpen)}
              color="#000"
              style={{ cursor: "pointer" }}
            />
          )}
          {!isOpen && (
            <SidebarLeft
              onClick={() => setIsOpen(!isOpen)}
              color="#000"
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        <div className={style.sidebar_content_items}>
          {sidebarItem.map((item, key) => (
            <NavLink
              key={key}
              to={item.path}
              className={({ isActive }) =>
                `${style.sidebar_content_item} ${isActive ? style.active : ""}`
              }
            >
              <span>{item.icon}</span>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SidebarComponents;
