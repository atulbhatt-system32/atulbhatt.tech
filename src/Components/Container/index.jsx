import PropTypes from "prop-types";

const Container = (props) => {
  const classes = (props.className || "") + " px-4 py-8 xl:py-16";
  return <div className={classes}>{props.children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
