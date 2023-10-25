import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { images, stables } from "../constants";

const ArticleCard = ({ post, className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_10px] ${className}`}
    >
      <img
        src={
          post.photo
            ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
            : images.HeroImage
        }
        alt="post1"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60 "
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          {post.title}
        </h2>
        <p className="text-dark-light mt-3 text-sm font-semibold lg:text-lg">
          {post.caption}
        </p>
        <div className="flex items-center justify-between flex-nowrap mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5 ">
            <img
              src={
                post.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
                  : images.profile1
              }
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10"
            />
            <div className="flex flex-col ">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Bikash Shaw
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36837E] w-fit bg-opacity-20 p-1 rounded-full">
                  <BsCheckLg className="w-2.5 h-2.5 text-[#36837E] " />
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  Verified Writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base ">
            11 Oct
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
