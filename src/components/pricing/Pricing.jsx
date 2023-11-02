import React from "react";
import PricingCard from "./PricingCard";
import Footer from "../Footer";
import Header from "../Header";

const basicFree = ["Read", "Comment", "Share"];
const basicPaid = ["Create", "Update", "24/7 Support"];
const AdvanceFree = ["Read", "Comment", "Share", "Create", "Update"];
const AdvancePaid = ["Upload Image", "Add Link", "Add table", "24/7 Support"];
const proFree = [
  "Basic",
  "Advance",
  "Upload Image",
  "Add Link",
  "Add table",
  "24/7 Support",
];
const proPaid = [];

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="px-4 py-8 mb-8 h-full max-w-screen-2xl shadow-lg lg:my-7 my-0 mx-auto flex flex-col rounded-lg ">
        <div className="mb-10 ">
          <h1 className="text-4xl font-bold text-slate-800 lg:text-left text-center">Pricing</h1>
          <hr />
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-8 md:flex-wrap lg:flex-row items-center justify-center lg:gap-x-10 my-auto gap-y-10 lg:gap-y-0">
          <PricingCard
            company={"Basic"}
            price={0}
            desc={"Free Plan"}
            freeItems={basicFree}
            paidItems={basicPaid}
          />
          <PricingCard
            company={"Advance"}
            price={399}
            desc={"Advance Functionality Plan"}
            freeItems={AdvanceFree}
            paidItems={AdvancePaid}
          />
          <PricingCard
            company={"Pro"}
            price={999}
            desc={"All Funtionality Plan"}
            freeItems={proFree}
            paidItems={proPaid}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
