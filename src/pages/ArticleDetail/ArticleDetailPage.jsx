import React from "react";
import ArticleDetailSkeleton from "./components/ArtcleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { images, stables } from "../../constants";
import MainLayout from "../../components/MainLayout";

import BreadCrumbs from "../../components/BreadCrumbs";
import { Link, useParams } from "react-router-dom";
import SuggestedPost from "./container/SuggestedPost";
import CommentContainer from "../../components/comments/CommentContainer";
import SocialShareBtn from "../../components/SocialShareBtn";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts, getSinglePost } from "../../services/index/posts";
import { useState } from "react";
import { useSelector } from "react-redux";
import Editor from "../../components/editor/Editor";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  //   const [body, setBody] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getSinglePost({ slug }),
    onSuccess: (data) => {
      setBreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Articles", link: "/articles" },
        { name: "Article title", link: `/blog/${data.slug}` },
      ]);
      //   setBody(parseJsonToHtml(data?.body));
    },
  });

  const { data: postData } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });

  return (
    <MainLayout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post details" />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />

            <img
              src={
                data?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + data.photo
                  : images.image
              }
              alt={data?.title}
              className="rounded-xl w-full"
            />

            <div className="flex gap-2 mt-4">
              {data?.categories.map((category) => (
                <Link
                  to="/blog?category=selectedCategory"
                  className="text-primary text-sm md:text-base font-roboto font-medium inline-block mt-4 uppercase"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <h1 className="text-xl md:text-[28px] font-medium font-roboto text-dark-hard mt-4">
              {!isLoading && !isError && (
                <Editor content={data?.title} editable={false} />
              )}
              {/* {data?.title} */}
            </h1>
            <div className="w-full overflow-x-auto">
              {!isLoading && !isError && (
                <Editor content={data?.body} editable={false} />
              )}
            </div>
            <CommentContainer
              comments={data?.comments}
              className="mt-10"
              logginedUserId={userState?.userInfo?._id}
              postSlug={slug}
            />
          </article>
          <div>
            <SuggestedPost
              header="Latest Content"
              className="mt-8 lg:mt-10 lg:max-w-xs"
              posts={postData?.data}
              tags={data?.tags}
            />
            <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
              <SocialShareBtn
                url={encodeURI(window.location.href)}
                title={encodeURIComponent(data?.title)}
              />
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
