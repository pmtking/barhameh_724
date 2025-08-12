import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";
const NavLinkComponent = ({ href, name, className, onClick }) => {
  return (
    <>
      <NavLink to={href} onClick={onClick} className={`nav_link ${className}`}>
        {name}
      </NavLink>
    </>
  );
};

export default NavLinkComponent;

NavLinkComponent.prototype = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
