import React from "react";

import style from "./input.module.scss";
import searchIcon from "../../assets/searchIcon.png";

const Input = () => {
  return (
    <div className={style.container}>
      <img alt={"icon"} src={searchIcon} />
      <input placeholder="Search..." />
    </div>
  );
};

export default Input;
