import React, { useState } from "react";
import { useEffect } from "react";

const NavItemCollapse = ({
  children,
  title,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (setActiveNavName !== name) {
      setIsChecked(false);
    }
  }, [setActiveNavName, name]);

  return (
    <div className="d-collapse d-collapse-arrow  min-h-0 rounded-none py-2">
      <input
        type="checkbox"
        className="py-0 min-h-0"
        checked={name === activeNavName}
        onChange={() => {
          setActiveNavName(name);
          setIsChecked(!isChecked);
        }}
      />
      <div
        className={`d-collapse-title text-lg min-h-0 py-0 pl-0 flex items-center gap-x-2 ${
          name === activeNavName
            ? "font-bold text-dark-hard"
            : "font-semibold text-[#a5a5a5]"
        } `}
      >
        {icon}
        {title}
      </div>
      <div className="d-collapse-content">
        <div className="flex flex-col gap-y-2 mt-2 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavItemCollapse;
