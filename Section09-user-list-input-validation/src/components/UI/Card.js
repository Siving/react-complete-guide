import react from "react";
import classes from "./Card.module.css";

// Using {props.children} that gives us the content
// between the opening and closing tags of the component
const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
