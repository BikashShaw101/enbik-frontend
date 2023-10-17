import React from "react";
import { images } from "../../constants";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link } from "react-router-dom";
import SuggestedPost from "./container/SuggestedPost";
import CommentContainer from "../../components/comments/CommentContainer";

const BreadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

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
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={BreadCrumbsData} />
          <img
            src={images.postImage}
            alt="articlePoster"
            className="rounded-xl w-full"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm md:text-base font-roboto font-medium inline-block mt-4 uppercase"
          >
            Education
          </Link>
          <h1 className="text-xl md:text-[28px] font-medium font-roboto text-dark-hard mt-4">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              doloribus expedita quam quo, itaque mollitia recusandae?
              Consectetur saepe quis soluta ex nam quibusdam aliquam velit animi
              architecto fugiat! Amet iusto fuga voluptatem rerum cupiditate,
              hic, dicta iste perferendis possimus corporis a consequatur quidem
              reiciendis nulla beatae provident blanditiis sunt vel officiis?
              Doloremque ipsam sit officiis dignissimos vitae et, maiores
              perferendis.
            </p>
          </div>
          <CommentContainer className="mt-10" logginedUserId="a" />
        </article>
        <SuggestedPost
          header="Latest Content"
          className="mt-8 lg:mt-10 lg:max-w-xs"
          posts={postData}
          tags={tagsData}
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
