import React from "react";
import {useTheme} from "../theme-color";

import style from "./detail.module.scss";

const AccountDetail = ({ title, credentials, customizedData }) => {
  const { theme} = useTheme();
  const customizedDataColor = {color: theme === "yellow" ? "#D89D35" : theme === "blue" ? "rgba(66, 95, 128, 0.76)" : "#F6A290"};
  return (
    <div className={style.container}>
      <div className={style.child1}>{title}</div>
      <div className={style.child2}>
        {credentials?.map((data, i) => {
          return <p key={i}>{data?.title}</p>;
        })}
      </div>
      <div className={style.child3}>
        {customizedData?.map((data, i) => {
          return <p key={i} style = {customizedDataColor}>{data?.title}</p>;
        })}
      </div>
    </div>
  );
};

export default AccountDetail;
