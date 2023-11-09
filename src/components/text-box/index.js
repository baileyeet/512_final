import React from "react";

import style from "./textBox.module.scss";

const TextBox = ({ title }) => {
  return (
    <div className={style.container}>
      <span>{title}</span>
    </div>
  );
};

export default TextBox;
