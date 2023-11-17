import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ErrorMessage from "../../components/ErrorMessage";
import ArticleCard from "../../components/ArticleCard";
import toast from "react-hot-toast";
import { getAllPosts } from "../../services/index/posts";
import { useQuery } from "@tanstack/react-query";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";

const NewArticles = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <>
      <Header />
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewArticles;
