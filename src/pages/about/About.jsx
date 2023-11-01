import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutCard from "./AboutCard";
import { images } from "../../constants";

const memberData = [
  {
    name: "Bikash kumar Shaw",
    stats: "Developer and Designer",
    desc:
      "Bikash shaw, Love to do coding and Full Stack Developer , hobbies : Editing, Nature Lover , Cinematography",

    img: images.bikash,
    links: {
      gmail:
        "bikashvicky101@gmail.com",
      linkedin: "https://www.linkedin.com/in/bikash-shaw/",
      github: "https://github.com/BikashShaw101",
    },
  },
  {
    name: "Saptarshi Mandal",
    stats: "Assitance Developer",
    desc: "Saptarshi Mandal, student of FIEM, persuing BCA, and self learner hobbies : Gaming, Gardening",

    img: images.saptarshi,
    links: {
      gmail:
        "https://www.facebook.com/profile.php?id=100009458753340&mibextid=ZbWKwL",
      linkedin: "linkedInProfile",
      github: "Github(optional)",
    },
  },
  {
    name: "Bhawesh Kumar Mahto",
    stats: "Document Developer",
    desc:
      "Bhawesh kumar mahto, student of FIEM, hobbies : playing cricket , reading books,photographer, Riding ",

    img: images.bhawesh,
    links: {
      gmail:
        "https://www.facebook.com/profile.php?id=100009458753340&mibextid=ZbWKwL",
      linkedin: "linkedInProfile",
      github: "Github(optional)",
    },
  },

  {
    name: "Rahul Pathak",
    stats: "Documentation and Presentation",
    desc: "Rahul Pathak, student as a software engineer, FIEM, hobbies: Gaming, Learning",

    img: images.rahul,
    links: {
      gmail:
        "rp258911@gmail.com",
      linkedin: "linkedInProfile",
      github: "Github(optional)",
    },
  },
  {
    name: "Bipul prasad",
    stats: "Entrepreneur and Management",
    desc: "I'm Bipul prasad, self learner, problem solver, and  Entrepreneur , hobbies: Traveling",

    img: images.bipul,
    links: {
      gmail:
        "bipulprasad14.1.2003@gmail.com",
      linkedin: "linkedInProfile",
      github: "Github(optional)",
    },
  },
  {
    name: "Abhinandan Das",
    stats: "Editor and UI Designer",
    desc: "Abhinandan Das, love Editing, hobbies : Gaming , Ancient Learning",

    img: images.abhinandan,
    links: {
      gmail:
        "abhinandandas951@gmail.com",
      linkedin: "linkedInProfile",
      github: "Github(optional)",
    },
  },
];

const About = () => {
  return (
    <>
      <Header />
      <div className="px-5 py-8 max-w-screen-2xl rounded-lg shadow mx-auto my-7">
        <div className="mb-7">
          <h1 className="font-bold text-4xl text-slate-700 text-center lg:text-left">
            About us
          </h1>
          <hr />
        </div>
        <div>
          <p className="text-3xl mb-2 font-bold text-center text-slate-800 ">
            College Team
          </p>
          <p className="mb-5 text-xl font-normal text-center text-slate-500 ">
            Members of EnbikBlog Minor Project
          </p>
          <p className="mb-5 text-xl font-normal text-center text-slate-500 uppercase">
            fiem batch 2021 - 2024
          </p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow dark:bg-gray-800 w-full">
          <div className="flex flex-col flex-wrap items-center justify-center md:flex-row md:justify-evenly">
            {memberData.map((member, index) => (
              <AboutCard
                key={index}
                name={member.name ? member.name : "Sample name"}
                stats={member.stats ? member.stats : "Sample status"}
                desc={member.desc ? member.desc : "Sample description"}
                img={member?.img}
                links={member.links}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
