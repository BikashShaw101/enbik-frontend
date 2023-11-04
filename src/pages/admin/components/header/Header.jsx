import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import images from "../../../../constants/images";
import { AiFillDashboard, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import NavItem from "./NavItem";
import NavItemCollapse from "./NavItemCollapse";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { createPost } from "../../../../services/index/posts";

const Header = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const [activeNavName, setActiveNavName] = useState("dashboard");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  const windowSize = useWindowSize();

  const {
    mutate: mutateCreatePost,
    isLoading: isLoadingCreatePost,
  } = useMutation({
    mutationFn: ({ token }) => {
      return createPost({
        token,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["posts"]);
      toast.success("Post is created successfully");
      navigate(`/admin/posts/manage/edit/${data.slug}`);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }, [windowSize.width]);

  const HandleCreateNewPost = ({ token }) => {
    mutateCreatePost({ token });
  };

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
              <NavItem
                title="Dashboard"
                icon={<AiFillDashboard className="text-xl" />}
                link="/admin"
                name="dashboard"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              />
              <NavItem
                title="Comments"
                icon={<FaComments className="text-xl" />}
                link="/admin/comments"
                name="comments"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              />
              <NavItemCollapse
                title="Posts"
                icon={<MdDashboard className="text-xl" />}
                name="posts"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              >
                <Link
                  to={"/admin/posts/manage"}
                  className="text-start font-semibold hover:text-orange-600"
                >
                  Manage Posts
                </Link>
                <button
                  disabled={isLoadingCreatePost}
                  onClick={() =>
                    HandleCreateNewPost({ token: userState.userInfo.token })
                  }
                  className="text-start font-semibold hover:text-orange-600 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Add New Post
                </button>
              </NavItemCollapse>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
