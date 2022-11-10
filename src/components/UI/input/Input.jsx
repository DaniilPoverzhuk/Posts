import React from "react";
import cl from "./Input.module.scss";

export default function Input(props) {
  return (
    <div className={cl.input__block}>
      <input className={cl.input} {...props} />
      <span className={cl.bar}></span>
    </div>
  );
}
