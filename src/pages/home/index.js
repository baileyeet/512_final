import { useState } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "../../components/theme-color";

import style from "./home.module.scss";
import landingPageImg from "../../assets/landingPageImg.png";
import rightArrowImg from "../../assets/rightArrow.png";
import ContentRow from "../../components/content-row";
import categoryCircle from "../../assets/home-categoryCircle.svg";
import Symptom from "../../components/symptom"
import seeMoreArrow from "../../assets/home-seeMoreArrow.svg"
import logSymptomsP from "../../assets/home-logSymptomsIcon.svg"
import logSymptomsB from "../../assets/home-logSymptomsIconB.svg"
import logSymptomsY from "../../assets/home-logSymptomsIconY.svg"

const Home = () => {
  const { theme} = useTheme();
  const logSymptoms = theme === "yellow" ? logSymptomsY :  theme === "blue" ? logSymptomsB : logSymptomsP;
  const coloredHeadingColor = {background: theme === "yellow" ? "#FFC562" : theme === "blue" ? "#425F80" : "#F6D1CC"};
  const chosenCategoryColor = {background: theme === "yellow" ? "rgba(255, 197, 98, 0.60)" : theme === "blue" ? "rgba(66, 95, 128, 0.60)" : "rgba(246, 162, 144, 0.60)"};
  return (
      <div className={style.container2}>
        {/*Once Journey Starts*/}
        <div className={style.child1}>
          <h1 className={style.chosenCategory} style = {chosenCategoryColor}>Tracking Insights </h1>
          <h1 className={style.category}>For You</h1>
          <h1 className={style.category}>Saved</h1>
        </div>
        <div className={style.child2}>
          <div className={style.heading}>Tracking Insights </div>
          {/*Tracking Cards*/}
          <div className={style.trackingRow}>
          <div className={style.child4}>
              <div className={style.subHeading}>Log Your Symptoms </div>
              <Link
                to="/tracking">
                <img alt="icon" src={logSymptoms} />
              </Link>
              
              
            </div>
            <div className={style.child3}>
              <div className={style.subHeading}>Recent Symptoms </div>
              <Symptom symptomName={"Irregular Cycle"} severity={"moderate"}></Symptom>
              <Symptom symptomName={"Adominal Pain"} severity={"moderate"}></Symptom>
              <Symptom symptomName={"Hot Flashes"} severity={"extreme"}></Symptom>
            </div>
            
  
            <div className={style.child6}>
              <div className={style.coloredHeading} style = {coloredHeadingColor}>
                 <div className={style.subHeading}>Your week at a glance </div>
              </div>
              <div className={style.weekSnippet}>Hi Susan! Check out some possible insights about your upcoming week.</div>
              <img alt="icon" src={seeMoreArrow} />
            </div>
          </div>
          <div className={style.heading}>For You</div>
          <ContentRow thumbnailType = {"For You"}></ContentRow>
          <div className={style.heading}>Saved</div>
          <ContentRow thumbnailType = {"Top Videos"}></ContentRow>
        </div>
      </div>
  );
};

export default Home;
