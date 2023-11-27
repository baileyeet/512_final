import {React, useState, useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../components/theme-color";


import style from "./resources.module.scss";
import moreInfoIcon from "../../assets/resources-moreinfo.svg";
import playIcon from "../../assets/resources-play.svg";
import VideoReel from "../../components/video-reel";
import Input from "../../components/input/inedx";
const Resources = () => {
  const [showVideo, setShowVideo] = useState(false);
  const componentRef = useRef();
  const { theme} = useTheme();
  const titleColor = {color: theme === "yellow" ? "#FFC562" : theme === "blue" ? "#425F80" : "#F6D1CC"};

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setShowVideo(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
      <div className={style.container}>
        {showVideo &&(
          <div className={style.videoContainer} ref = {componentRef}>
            <iframe src="https://www.youtube.com/embed/af-356SbCkY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          </div>
        )}
        <div className={style.mainContainer}>
          <div className={style.inputSection}>
            <div className={style.inputDiv}>
              <Input pageType = {"Resources"}/>
            </div>
          </div>
          <div className={style.child1}>
            <h1 className={style.heading} style = {titleColor}>The Menosquad </h1>
            <h1 className={style.subHeading}>#1 in Videos Today </h1>
            <div className={style.h2}>
              <p>Laura, Elise and Amber from the 
            MenoSquad answer your questions about Menopause! Sometimes happy, sometimes sad, and always brutally honest, the girls are here to answer.
            </p>
            </div>
          </div>
          
          <div className={style.child2}>
            <div className={style.playButton} onClick ={() => setShowVideo(true)}>
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
      </div>
    );
  };

  export default Resources;