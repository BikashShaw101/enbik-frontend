import React from "react";

const ArticlesSkeleton = () => {
  return (
    <div className="w-full h-auto animate-pulse ">
      <div className="flex gap-x-4 bg-gray-50 px-4 py-3">
        <div className="w-[350px] h-36 bg-gray-200 rounded-lg" />
        <div className="w-full h-36 bg-gray-200 rounded-lg px-8 py-7">
          <div className="w-full h-4 bg-gray-300 rounded-lg" />
          <div className="w-4/5 h-3 my-4 bg-gray-300 rounded-lg" />
          <div className="w-5/12 h-2 mb-2 bg-gray-300 rounded-lg" />
          <div className="w-2/12 h-2  bg-gray-300 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ArticlesSkeleton;
