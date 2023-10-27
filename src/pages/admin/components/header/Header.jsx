import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import images from "../../../../constants/images";
import { AiFillDashboard, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import NavItem from "./NavItem";
import NavItemCollapse from "./NavItemCollapse";
import { useEffect } from "react";

const MENU_ITEM = [
  {
    title: "Dashboard",
    link: "/admin",
    icon: <AiFillDashboard className="text-xl" />,
    name: "dashboard",
    type: "link",
  },
  {
    title: "Comments",
    link: "/admin/comments",
    icon: <FaComments className="text-xl" />,
    name: "comments",
    type: "link",
  },
  {
    title: "Posts",
    content: [
      {
        title: "New",
        link: "/admin/posts/new",
      },
      {
        title: "Manage",
        link: "/admin/posts/manage",
      },
    ],
    icon: <MdDashboard className="text-xl" />,
    name: "posts",
    type: "collapse",
  },
];

const Header = () => {
  const [activeNavName, setActiveNavName] = useState("dashboard");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }, [windowSize.width]);

  return (
    <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0">
      {/* Logo  */}
      <Link to={"/"}>
        <img src={images.logo} alt="logo" className="w-24 lg:hidden" />
      </Link>

      {/* menu burget item  */}
      <div className="cursor-pointer lg:hidden">
        {isMenuActive ? (
          <AiOutlineClose className="w-6 h-6" onClick={toggleMenuHandler} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={toggleMenuHandler} />
        )}
      </div>
      {/* sidebar container */}
      {isMenuActive && (
        <div className="fixed inset-0 lg:static lg:w-full lg:h-full">
          {/* underlay  */}
          <div
            className=" fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={toggleMenuHandler}
          />
          {/* sidebar */}
          <div className="fixed top-0 bottom-0 left-0 z-50  w-3/4 overflow-y-auto bg-white p-4 lg:static lg:w-full lg:h-full lg:p-6">
            <Link to={"/"}>
              <img src={images.logo} alt="logo" className="w-24" />
            </Link>
            <h4 className="font-bold mt-10 uppercase text-[#c7c7c7]">
              main menu
            </h4>
            {/* menu items  */}
            <div className="flex flex-col mt-6 gap-y-[0.563rem]">
              {MENU_ITEM.map((item) =>
                item.type === "link" ? (
                  <NavItem
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    link={item.link}
                    name={item.name}
                    activeNavName={activeNavName}
                    setActiveNavName={setActiveNavName}
                  />
                ) : (
                  <NavItemCollapse
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    content={item.content}
                    name={item.name}
                    activeNavName={activeNavName}
                    setActiveNavName={setActiveNavName}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
