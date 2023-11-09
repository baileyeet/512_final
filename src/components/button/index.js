import React from "react";

import style from "./button.module.scss";

const Button = ({ title, icon, className }) => {
  return (
    <div className={`${style.container} ${className}`}>
      <span>{title}</span>
      <img alt="icon" src={icon && icon} />
    </div>
  );
};

export default Button;
