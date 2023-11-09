import React from "react";

import style from "./input.module.scss";
import searchIcon from "../../assets/searchIcon.png";

const Input = ({pageType}) => {
  const searchBarPage = (pageType === "Resources") ? style.containerResources : style.container;
  return (
    <div className={searchBarPage}>
      <img alt={"icon"} src={searchIcon} />
      <input placeholder="Search..."/>
    </div>
  );
};

export default Input;
