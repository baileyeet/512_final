import React from "react";

import commentIcon from "../../assets/commentIcon.png";
import shareIcon from "../../assets/shareIcon.png";
import saveIcon from "../../assets/saveIcon.png";
import blogImg1 from "../../assets/blogImg1.png";
import style from "./question.module.scss";

const Question = ({ title, desc, blogImg }) => {
  return (
    <div className={style.container}>
      <div className={style.userInfo}>
        <div className={style.circle}></div>
        <b>General</b>
        <span>- Posted by iloveperiods369</span>
      </div>
      <p>{title}</p>
      {desc ? <span>{desc}</span> : <img src={blogImg} alt="img" />}

      {/* social icons  */}
      <div className={style.socialIcons}>
        {socialData?.map(({ icon, title }) => {
          return (
            <div
              style={{
                marginRight: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img alt="icon" src={icon} />
              <span>{title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;

const socialData = [
  { icon: commentIcon, title: "302 comments" },
  { icon: shareIcon, title: "share" },
  { icon: saveIcon, title: "save" },
];
