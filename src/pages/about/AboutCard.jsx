import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AboutCard = ({ name, stats, desc, links, img }) => {
  const [active, setActive] = useState(false);
  const handleMemberDescription = () => {
    setActive(true);
  };
  return (
    <div className="p-4 my-5 lg:my-0 ">
      {active && (
        <>
          <div className="fixed top-0 left-0 min-w-screen lg:w-screen z-[60] min-h-screen overflow-hidden bg-slate-800 flex items-center justify-center p-10">
            <img
              src={img}
              alt="memberProfile"
              className="xl:w-2/5 md:w-5/5 h-auto rounded-lg xl:hover:scale-110 transition-all duration-200 "
            />
          </div>
          <AiOutlineClose
            className="text-white text-2xl font-bold z-[99] fixed right-4 top-4 cursor-pointer"
            onClick={() => setActive(false)}
          />
        </>
      )}
      <div className="mb-4 text-center opacity-90">
        <div className="relative block">
          <img
            alt="profile"
            src={img}
            className="mx-auto object-cover rounded-full h-40 w-40 cursor-pointer"
            onClick={handleMemberDescription}
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-2xl text-gray-800 dark:text-white">{name}</p>
        <p className="text-xl font-light text-gray-500 dark:text-gray-200">
          {stats}
        </p>
        <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
          {desc}
        </p>
      </div>
      <div className="flex items-center justify-evenly pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
        <a
          href={`https://mail.google.com/mail/u/1/?view=cm&fs=1&to=${
            links.gmail ? links.gmail : ""
          }.com&tf=1`}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white "
            fill="currentColor"
            viewBox="0 0 48 48"
            id="gmail"
          >
            <path
              fill="#ggg"
              d="M3.27273 42.0088H10.9091V23.4633L0 15.2815V38.736C0 40.5442 1.46455 42.0088 3.27273 42.0088zM37.0909 42.0088H44.7273C46.5355 42.0088 48 40.5442 48 38.7361V15.2815L37.0909 23.4633V42.0088z"
            ></path>
            <path
              fill="#ggg"
              d="M37.0909 9.28155V23.4633L48 15.2815V10.9179C48 6.87336 43.3827 4.56336 40.1455 6.99064L37.0909 9.28155Z"
            ></path>
            <path
              fill="#ggg"
              fillRule="evenodd"
              d="M10.9091 23.4633V9.28152L24 19.0997L37.0909 9.28155V23.4633L24 33.2815L10.9091 23.4633Z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#ggg"
              d="M0 10.9179V15.2815L10.9091 23.4633V9.28152L7.85455 6.99064C4.61727 4.56336 0 6.87336 0 10.9179Z"
            ></path>
          </svg>
        </a>

        <a href={links.linkedin} className="cursor-pointer">
          <svg
            width="30"
            height="30"
            fill="currentColor"
            className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white "
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
          </svg>
        </a>
        <a href={links.github} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white "
            viewBox="0 0 1792 1792"
          >
            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AboutCard;
