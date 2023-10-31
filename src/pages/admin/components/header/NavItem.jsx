import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({
  link,
  title,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  return (
    <NavLink
      to={link}
      className={`${
        name === activeNavName
          ? "font-bold text-dark-hard"
          : "font-semibold text-[#a5a5a5]"
      } flex gap-x-2 py-2 items-center text-lg`}
      onClick={() => setActiveNavName(name)}
    >
      {icon}
      {title}
    </NavLink>
  );
};

export default NavItem;
