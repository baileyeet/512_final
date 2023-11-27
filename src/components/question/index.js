import React from "react";

import commentIconP from "../../assets/commentIcon.png";
import shareIconP from "../../assets/shareIcon.png";
import saveIconP from "../../assets/saveIcon.png";
import shareIconY from "../../assets/community-shareIconY.svg";
import saveIconY from "../../assets/community-saveIconY.svg";
import commentIconY from "../../assets/community-commentIconY.svg";
import shareIconB from "../../assets/community-shareIconB.svg";
import saveIconB from "../../assets/community-saveIconB.svg";
import commentIconB from "../../assets/community-commentIconB.svg";

import blogImg1 from "../../assets/blogImg1.png";
import style from "./question.module.scss";
import {useTheme} from "../theme-color";




const Question = ({ title, desc, blogImg }) => {
  
  const { theme} = useTheme();
  const socialsColor = {color: theme === "yellow" ? "#D89D35" : theme === "blue" ? "#425F80" : "#E2ACA5"};
  const shareIcon = theme === "yellow" ? shareIconY : theme === "blue" ? shareIconB : shareIconP;
  const commentIcon = theme === "yellow" ? commentIconY : theme === "blue" ? commentIconB : commentIconP;
  const saveIcon = theme === "yellow" ? saveIconY : theme === "blue" ? saveIconB: saveIconP;

  const socialData = [
    { icon: commentIcon, title: "302 comments" },
    { icon: shareIcon, title: "share" },
    { icon: saveIcon, title: "save" },
  ];
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
              <span style = {socialsColor}>{title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  
  
};

export default Question;

