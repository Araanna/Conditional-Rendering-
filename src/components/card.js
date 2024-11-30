import React from "react";

const Card = ({ data, cardIndex }) => {
  return (
    <div>
      {data[cardIndex].map((item) => (
        <div className="border border-2 rounded-lg m-10 p-5">
          <p>{item.title}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
