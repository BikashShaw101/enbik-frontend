import React from "react";

const ArticleCardSkeleton = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_10px] ${className} animate-pulse `}
    >
      {/* instead of image  */}
      <div className="w-full aspect-video bg-slate-300 " />

      <div className="p-5">
        {/* title  */}
        <div className="w-56 h-2 bg-slate-300 mt-4 rounded-lg" />
        {/* caption  */}
        <div className="w-24 h-2 bg-slate-300 mt-4 rounded-lg" />

        <div className="flex items-center justify-between flex-nowrap mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5 ">
            {/* post avatar  */}
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-300" />

            <div className="flex flex-col ">
              {/* user name   */}
              <div className="w-24 h-2 bg-slate-300 rounded-lg" />
              {/* verified status  */}
              <div className="w-16 h-2 bg-slate-300 mt-2 rounded-lg" />
            </div>
          </div>
          {/* date  */}
          <div className="w-10 h-2 bg-slate-300 mt-4 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
