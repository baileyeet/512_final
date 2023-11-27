import React from "react";

import style from "./button.module.scss";
import {useTheme} from "../theme-color";

const Button = ({ title, icon, className }) => {
  const { theme} = useTheme();
  const buttonColor = {background: theme === "yellow" ? "#FFC562" : theme === "blue" ? "#425F80" : "#E2ACA5"};
  return (
    <div className={`${style.container} ${className}`} style={buttonColor}>
      <span>{title}</span>
      <img alt="icon" src={icon && icon} />
    </div>
  );
};

export default Button;
