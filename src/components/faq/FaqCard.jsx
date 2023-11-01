import React from "react";

const FaqCard = ({ title, desc, points }) => {
  return (
    <div
      tabIndex={0}
      className="d-collapse d-collapse-plus border border-base-300 bg-base-200 "
    >
      <div className="d-collapse-title text-xl font-semibold">{title}</div>
      <div className="d-collapse-content">
        <p>{desc}</p>
        {points &&
          points.map((data) => (
            <ul className=" px-7 py-2 list-disc">
              <li className="font-semibold">{data.title}</li>
              <p>{data.desc}</p>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default FaqCard;
