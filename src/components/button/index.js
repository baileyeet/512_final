import React from "react";

import style from "./button.module.scss";

const Button = ({ title, icon }) => {
  return (
    <div className={style.container}>
      <span>{title}</span>
      <img alt="icon" src={icon && icon} />
    </div>
  );
};

export default Button;
