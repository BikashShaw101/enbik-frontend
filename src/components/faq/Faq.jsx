import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <>
      <Header />
      <div class="max-w-screen-xl p-8 mx-auto">
        <h2 class="mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">
          FAQs
        </h2>
        <ul class="flex flex-wrap items-start gap-8">
          <FaqCard
            title={"Why we read old scriptures like Vedanta "}
            desc={
              "The act of reading old scriptures, such as Vedanta, transcends the boundaries of time and culture, opening portals to profound insights and ageless wisdom. In a world marked by rapid technological advancements and societal changes, one might question the relevance of these ancient texts. However, delving into the scriptures of the past offers a treasure trove of benefits, encompassing spiritual guidance, philosophical enlightenment, cultural heritage, ethical values, and personal growth. In this 500-word exploration, we will unveil the reasons why people read old scriptures like Vedanta and how these texts continue to be relevant in our contemporary lives."
            }
          />
          <FaqCard
            title={"What is Vedanta"}
            desc={
              "Vedanta is one of the six orthodox (astika) schools of Hindu philosophy, and it represents the culmination of Indian philosophical thought. The term 'Vedanta' is derived from two Sanskrit words: 'Veda,' which means 'knowledge,' and 'anta,' which means 'end' or 'conclusion.' Vedanta can be understood as the 'end' or 'conclusion' of the Vedas, which are ancient Indian scriptures that form the basis of Hindu religious and philosophical traditions."
            }
          />
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
