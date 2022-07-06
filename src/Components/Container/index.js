import React from "react";

const Container = (props) => {
  const classes = props.className + " xl:py-16 xl:px-20";
  return <div className={classes}>{props.children}</div>;
};

export default Container;
