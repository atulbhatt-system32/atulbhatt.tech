import React from "react";

const Container = (props) => {
  const classes = props.className + " px-4 py-8 xl:py-16 xl:px-20";
  return <div className={classes}>{props.children}</div>;
};

export default Container;
