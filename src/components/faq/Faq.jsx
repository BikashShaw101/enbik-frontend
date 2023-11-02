import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import FaqCard from "./FaqCard";

const FaqData = [
  {
    title: "Why we read old scriptures like Vedanta ",
    desc:
      "The act of reading old scriptures, such as Vedanta, transcends the boundaries of time and culture, opening portals to profound insights and ageless wisdom. In a world marked by rapid technological advancements and societal changes, one might question the relevance of these ancient texts. However, delving into the scriptures of the past offers a treasure trove of benefits, encompassing spiritual guidance, philosophical enlightenment, cultural heritage, ethical values, and personal growth. In this 500-word exploration, we will unveil the reasons why people read old scriptures like Vedanta and how these texts continue to be relevant in our contemporary lives.",
  },
  {
    title: "What is Vedanta",
    desc:
      "Vedanta is one of the six orthodox (astika) schools of Hindu philosophy, and it represents the culmination of Indian philosophical thought. The term 'Vedanta' is derived from two Sanskrit words: 'Veda,' which means 'knowledge,' and 'anta,' which means 'end' or 'conclusion.' Vedanta can be understood as the 'end' or 'conclusion' of the Vedas, which are ancient Indian scriptures that form the basis of Hindu religious and philosophical traditions.",
  },
  {
    title: "How can I start studying Vedanta and old scriptures?",
    desc:
      "You can begin by reading translations of the Upanishads and texts by renowned philosophers like Adi Shankaracharya. Consider seeking guidance from a qualified teacher or guru to gain a deeper understanding.",
  },
  {
    title: "What are the major schools of Vedanta philosophy?",
    desc:
      "The three main schools are Advaita Vedanta (non-dualism), Dvaita Vedanta (dualism), and Vishishtadvaita Vedanta (qualified non-dualism), each offering a distinct interpretation of the relationship between the individual soul and Brahman.",
  },
  {
    title: "How can philosophy be applied in daily life?",
    desc:
      "Philosophy offers a framework for critical thinking, ethical decision-making, and self-reflection. It can help you make informed choices and navigate life's complexities.",
  },
  {
    title: "What are some key social issues addressed in philosophy?",
    desc:
      "Philosophy addresses social justice, ethics, morality, political theory, environmental ethics, and questions related to human rights, equality, and the nature of a just society.",
  },
  {
    title: "Can philosophy provide solutions to current global challenges?",
    desc:
      "While philosophy doesn't provide specific solutions, it offers tools for critical analysis and ethical reasoning, which can inform responses to global issues such as climate change, poverty, and conflict.",
  },
  {
    title: "How does philosophy promote ethical decision-making?",
    desc:
      "Philosophy encourages individuals to explore ethical principles, consider moral dilemmas, and make choices based on reasoned arguments. It provides a foundation for making ethical decisions in various life situations.",
  },
  {
    title:
      "Are there contemporary philosophers discussing the relevance of old scriptures and Vedanta in the modern world?",
    desc:
      "Yes, contemporary philosophers often discuss the continued relevance of old scriptures and Vedanta in addressing contemporary issues, spirituality, and the human quest for meaning and understanding.  Here are a few ways how: ",
    points: [
      {
        title: "Climate Change:",
        desc:
          "Philosophy can help address the problem of climate change. MIT professor of philosophy Kieran Setiya explores how individuals and societies can think about and act on climate change",
      },
      {
        title: "Times of Crisis:",
        desc:
          "The importance of philosophical thinking in helping us cope with the multiple challenges the world faces has been highlighted by UNESCO",
      },
    ],
  },
];

const Faq = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-2xl py-8 px-5 mx-auto shadow-lg lg:my-7 my-0 rounded-lg">
        <h2 className="mb-12 text-3xl lg:text-left text-center font-bold leading-9 text-gray-900 border-b-2 border-gray-100">
          FAQs
        </h2>
        <ul className="flex flex-wrap items-start gap-8">
          {FaqData.map((data, index) => (
            <>
              <FaqCard
                title={data.title}
                desc={data.desc}
                points={data.points}
                key={index}
              />
            </>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
