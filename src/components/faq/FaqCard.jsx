import React from "react";

const FaqCard = ({ title, desc }) => {
  return (
    <div
      tabIndex={0}
      className="d-collapse d-collapse-plus border border-base-300 bg-base-200"
    >
      <div className="d-collapse-title text-xl font-medium">{title}</div>
      <div className="d-collapse-content">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FaqCard;
