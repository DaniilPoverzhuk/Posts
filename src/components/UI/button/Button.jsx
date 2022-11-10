import React from "react";
import cl from "./Button.module.scss";

export default function Button(props) {
  return (
    <button className={cl.button} {...props}>
      {props.value}
    </button>
  );
}
