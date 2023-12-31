import React from "react";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { images, stables } from "../constants";

const ArticleCard = ({ post, className, imgClass="" }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_10px] ${className}`}
    >
      <Link to={`/blog/${post.slug}`}>
        <img
          src={
            post?.photo
              ? stables.UPLOAD_FOLDER_BASE_URL + post?.photo
              : images.image
          }
          alt="post1"
          className={`w-full object-cover object-center md:h-52 ${imgClass} `}
        />
      </Link>
      <div className="p-5">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
            {post.title}
          </h2>
          <p className="text-dark-light mt-3 text-sm font-semibold lg:text-lg">
            {post.caption}
          </p>
        </Link>
        <div className="flex items-center justify-between flex-nowrap mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5 ">
            <img
              src={
                post.user?.avatar
                  ? stables.UPLOAD_FOLDER_BASE_URL + post.user?.avatar
                  : images.user
              }
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col ">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                {post.user.name}
              </h4>
              <div className="flex items-center gap-x-2">
                <span
                  className={` ${
                    post.user.verified ? "bg-[#36837E]" : "bg-red-500"
                  } w-fit bg-opacity-20 p-1 rounded-full`}
                >
                  {post.user.verified ? (
                    <BsCheckLg className="w-2.5 h-2.5 text-[#36837E] " />
                  ) : (
                    <AiOutlineClose className="w-2.5 h-2.5 text-red-500 " />
                  )}
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  {post.user.verified ? "Verified" : "Unverified"} Writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base space-x-1 ">
            <span>{new Date(post.createdAt).getDate()}</span>
            <span>
              {new Date(post.createdAt).toLocaleString("default", {
                month: "long",
              })}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
