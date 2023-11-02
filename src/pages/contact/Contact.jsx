import React from "react";
import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import toast from "react-hot-toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactCard from "./ContactCard";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_0ra03dk", "template_2mvjku6", data, "-9UuVz-6vmajnKntg")
      .then((response) => {
        formSuccess();
      })
      .catch((err) => {
        console.log("FAILED..! ", err);
        toast.error("Something went wrong! Try Later");
      });
  };

  const formSuccess = () => {
    toast.success("Thanks for submitting your Queries");
    document.getElementById("queryForm").reset();
  };

  return (
    <>
      <Header />
      <div className="px-5 py-8 max-w-screen-2xl rounded-lg shadow mx-auto lg:my-7 my-0 ">
        <div className="mb-9">
          <h1 className="text-4xl font-bold text-slate-800 lg:text-left text-center">
            Contact Us
          </h1>
          <hr className="bg-slate-900" />
        </div>
        <div className="flex ">
          <div className="bg-slate-800 px-6 py-7 hidden lg:block rounded-lg w-2/5 text-white ">
            <p className="text-gray-200 font-semibold">
              Feel free to contact us, for any query and questions related to
              this website and it's content
            </p>
            <ContactCard
              title={"Reached"}
              numbers={"3K"}
              className={"w-2/5 bg-green-500"}
            />
            <ContactCard
              title={"Responses"}
              numbers={"1K"}
              className={"w-1/5 bg-green-300"}
            />
          </div>
          <div className=" bg-slate-800 mx-auto px-6 py-8 rounded-lg ">
            <form
              id="queryForm"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-wrap lg:flex-row gap-x-5 items-center justify-center"
            >
              <div className="flex gap-x-4 w-full flex-wrap md:flex-nowrap">
                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    {...register("from_name", {
                      required: "Name is Required",
                    })}
                    autoComplete="off"
                    className="input p-4  w-full rounded-lg outline-none"
                  />

                  {errors.from_name?.message && (
                    <p className="mt-1 text-red-500">
                      {errors.from_name?.message}
                    </p>
                  )}
                </div>
                <div className="mb-4 w-full">
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email"
                    autoComplete="off"
                    className="input p-4 w-full rounded-lg outline-none"
                    {...register("reply_to", {
                      required: "Email is Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />

                  {errors.reply_to?.message && (
                    <p className="mt-1 text-red-500">
                      {errors.reply_to?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-x-4 w-full flex-wrap md:flex-nowrap">
                <div className="mb-4 w-full">
                  <input
                    type="text"
                    min={0}
                    name="from_phone"
                    placeholder="Phone"
                    autoComplete="off"
                    className="input p-4 w-full rounded-lg outline-none"
                    {...register("from_phone", {
                      required: "Phone number is Required",
                      minLength: {
                        value: 8,
                        message: "Invalid phone number",
                      },
                    })}
                  />

                  {errors.from_phone?.message && (
                    <p className="mt-1 text-red-500">
                      {errors.from_phone?.message}
                    </p>
                  )}
                </div>
                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="input p-4 w-full  rounded-lg outline-none"
                    {...register("subject", {
                      required: "Subject is Required",
                      minLength: {
                        value: 10,
                        message: "Minimum 10 character subjectLine",
                      },
                    })}
                    autoComplete="off"
                  />

                  {errors.subject?.message && (
                    <p className="mt-1 text-red-500">
                      {errors.subject?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4 w-full ">
                <textarea
                  name="message"
                  className="textarea w-full resize-none px-4 py-3 outline-none rounded-lg "
                  placeholder="Your message "
                  {...register("message", {
                    required: "Message is Required",
                    minLength: {
                      value: 20,
                      message: "Minimum 20 character subjectLine",
                    },
                    maxLength: {
                      value: 500,
                      message: "Minimum 500 character Allowed",
                    },
                  })}
                  autoComplete="off"
                />

                {errors.message?.message && (
                  <p className="mt-1 text-red-500">{errors.message?.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-active bg-gray-600 text-white font-semibold hover:bg-gray-700 py-3 rounded-lg w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
