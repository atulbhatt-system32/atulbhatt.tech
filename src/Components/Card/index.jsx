import PropTypes from "prop-types";

const Card = (props) => {
  const classes =
    props.className +
    " " +
    "drop-shadow-2xl cursor-pointer shadow-custom dark:bg-black-200 cursor-pointer";
  const data = { ...props.data };
  return (
    <div className={classes} onClick={() => window.open(data.url)}>
      {props?.children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Card;
