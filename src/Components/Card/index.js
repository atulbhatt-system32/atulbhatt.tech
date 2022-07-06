import React from "react";

const Card = (props) => {
  const classes = props.className + " rounded-xl drop-shadow-2xl bg-white";
  return <div className={classes}>{props.children}</div>;
};
export default Card;
