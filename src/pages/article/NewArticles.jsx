import React from "react";
import Articles from "../home/container/Articles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NewArticles = () => {
  return (
    <>
      <Header />
      <div className="px-5 py-8 max-w-screen-2xl rounded-lg shadow mx-auto lg:my-7 my-0 ">
        <h2 className="mb-12 text-3xl lg:text-left text-center font-bold leading-9 text-gray-900 border-b-2 border-gray-100">
          Articles
        </h2>
        <Articles hidden={"hidden"} />
      </div>
      <Footer />
    </>
  );
};

export default NewArticles;
