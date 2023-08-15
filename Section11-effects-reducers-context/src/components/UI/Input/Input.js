import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

// Technically there are 2 parameters: props and ref. We usually only use props
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // Put focus on this input
  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
