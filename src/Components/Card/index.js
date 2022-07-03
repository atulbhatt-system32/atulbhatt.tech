import React from "react";

const Card = (props) => {
  return <div className="rounded-xl drop-shadow-2xl">{props.children}</div>;
};
export default Card;
