import React from "react";

const Button = (props) => {
  const classes =
    props.className + " bg-btn-color text-white-900 rounded-md cursor-pointer";
  return <button className={classes}>{props.children}</button>;
};

export default Button;
