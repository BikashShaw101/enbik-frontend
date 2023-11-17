import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import ArticleCard from "../../../components/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getHomePost } from "../../../services/index/posts";
import toast from "react-hot-toast";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";
import { Link } from "react-router-dom";

const Articles = ({ hidden }) => {
  useEffect(() => {}, []);
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getHomePost(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <section className={`flex flex-col container mx-auto px-5 py-10`}>
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {isLoading ? (
          [...Array(3)].map((item, index) => (
            <ArticleCardSkeleton
              key={index}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />
          ))
        ) : isError ? (
          <ErrorMessage message="Couldn't fetch the post data" />
        ) : (
          data?.data.map((post) => (
            <ArticleCard
              key={post._id}
              post={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              imgClass="lg:h-48 xl:h-60"
            />
          ))
        )}
        {/* {[...Array(3)].map((item, index) => (
          <ArticleCardSkeleton
            key={index}
            className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
          />
        ))} */}
      </div>
      <Link
        to={"/articles"}
        className={`${hidden} mx-auto flex items-center gap-x-2 font-bold text-darkprimary border-2 border-darkprimary px-6 py-3 rounded-lg `}
      >
        <span>More Articles</span>
        <FaArrowRight className="w-3 h-3 " />
      </Link>
    </section>
  );
};

export default Articles;
