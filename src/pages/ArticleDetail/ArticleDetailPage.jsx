import React from "react";
import ArticleDetailSkeleton from "./components/ArtcleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { images, stables } from "../../constants";
import MainLayout from "../../components/MainLayout";
import { generateHTML } from "@tiptap/html";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import parse from "html-react-parser";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link, useParams } from "react-router-dom";
import SuggestedPost from "./container/SuggestedPost";
import CommentContainer from "../../components/comments/CommentContainer";
import SocialShareBtn from "../../components/SocialShareBtn";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../services/index/posts";
import { useState } from "react";
import { useSelector } from "react-redux";

const postData = [
  {
    _id: 1,
    image: images.postImage,
    title: "Help children get better education",
    createdAt: "2023-01-19T08:24:14-05:00",
  },
  {
    _id: 2,
    image: images.postImage,
    title: "Help children get better education",
    createdAt: "2023-01-19T08:24:14-05:00",
  },
  {
    _id: 3,
    image: images.postImage,
    title: "Help children get better education",
    createdAt: "2023-01-19T08:24:14-05:00",
  },
  {
    _id: 4,
    image: images.postImage,
    title: "Help children get better education",
    createdAt: "2023-01-19T08:24:14-05:00",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Shastra",
  "Darshanas",
  "vedas",
  "Gita",
];

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setBreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "Article title", link: `/blog/${data.slug}` },
      ]);
      setBody(
        parse(
          generateHTML(data?.body, [Bold, Italic, Text, Paragraph, Document])
        )
      );
    },
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
                  ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
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
              {data?.title}
            </h1>
            <div className="mt-4 prose prose-sm sm:prose-base">{body}</div>
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
              posts={postData}
              tags={tagsData}
            />
            <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
              <SocialShareBtn
                url={encodeURI("https://one8.com/")}
                title={encodeURIComponent("One8 Website")}
              />
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
