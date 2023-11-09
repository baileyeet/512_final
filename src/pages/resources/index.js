import React from "react";

import style from "./resources.module.scss";
import moreInfoIcon from "../../assets/resources-moreinfo.svg";
import playIcon from "../../assets/resources-play.svg";
import moreinfo from "../../assets/resources-moreinfobutton.png";
import VideoReel from "../../components/video-reel";
import Input from "../../components/input/inedx";
import Button from "../../components/button";
export default function Resources() {
    //document.getElementById("container").style.backgroundImage = "url(../../assets/resources-background.png)";
    return (
      <div className={style.container}>
        <div className={style.inputSection}>
          <div className={style.inputDiv}>
            <Input pageType = {"Resources"}/>
          </div>
        </div>
        <div className={style.child1}>
          <h1 className={style.heading}>The Menosquad </h1>
          <h1 className={style.subHeading}>#1 in Videos Today </h1>
          <div className={style.h2}>
            <p>Laura, Elise and Amber from the 
          MenoSquad answer your questions about Menopause! Sometimes happy, sometimes sad, and always brutally honest, the girls are here to answer.
          </p>
          </div>
        </div>
        
        <div className={style.child2}>
          <div className={style.playButton}>
            <img alt="icon" src={playIcon} />
            <span>Play</span>
          </div>
          <div className={style.moreInfoButton}>
            <img alt="icon" src={moreInfoIcon} />
            <span>More Info</span>
          </div>
        </div>
        <div className={style.title}> <p></p> </div>
        <div className={style.title}> <p></p> </div>
        <div>
            <h1 className={style.groupHeading}>Popular Videos</h1>
            <VideoReel></VideoReel>
        </div>
        <div className={style.title}> <p></p> </div>
        <div>
            <h1 className={style.groupHeading}>Education</h1>
            <VideoReel></VideoReel>
        </div>
      </div>
    );
  };
  