import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavItemCollapse = ({
  content,
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
    <div className="collapse collapse-arrow  min-h-0 rounded-none py-2">
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
        className={`collapse-title text-lg min-h-0 py-0 pl-0 flex items-center gap-x-2 ${
          name === activeNavName
            ? "font-bold text-primary"
            : "font-semibold text-[#a5a5a5]"
        } `}
      >
        {icon}
        {title}
      </div>
      <div className="collapse-content">
        <div className="flex flex-col gap-y-2 mt-2 ">
          {content.map((item) => (
            <Link to={item.link} key={item.title} className="font-semibold text-[#a5a5a5]">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavItemCollapse;
