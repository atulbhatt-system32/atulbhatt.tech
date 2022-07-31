import React from "react";

const Card = (props) => {
  const classes =
    props.className + " rounded-xl drop-shadow-2xl cursor-pointer";
  const data = { ...props.data };
  return (
    <div className={classes} onClick={() => window.open(data.url)}>
      {props.children}
    </div>
  );
};
export default Card;
