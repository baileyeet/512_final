import React, { useState } from "react";

import style from "./home.module.scss";
import landingPageImg from "../../assets/landingPageImg.png";
import rightArrowImg from "../../assets/rightArrow.png";
import ContentRow from "../../components/content-row";
import categoryCircle from "../../assets/home-categoryCircle.svg";
import Symptom from "../../components/symptom"
import seeMoreArrow from "../../assets/home-seeMoreArrow.svg"
import logSymptoms from "../../assets/home-logSymptomsIcon.svg"

const Home = () => {
  const [journeyStarted, setJourneyStarted] = useState(false);

  const handleStartJourney = () => {
    setJourneyStarted(true);
  };
  return (
    <div>
      {/*Landing*/}
      {!journeyStarted ? (
      <div className={style.container}>
      <div className={style.child1}>
        <h1 className={style.heading}>Your Ultimate </h1>
        <h1 className={style.heading}>Menopause </h1>
        <h1 className={style.heading}> Companion</h1>
        <div className={style.subHeading}>
          <p>Empower your menopause journey </p>
          <p>
            with our <b>all-in-one</b> platform.<b> Learn</b>,{" "}
          </p>
          <p>
            <b>Connect</b> and <b>Track</b> your progress.
          </p>
          <div className={style.startJourney} onClick={handleStartJourney}>
            <p>Start My Journey</p>
            <img alt="arrow" src={rightArrowImg} />
          </div>
        </div>
      </div>
      <div className={style.child2}>
        <img alt="img" src={landingPageImg} />
      </div>
      </div>
      ) : 
      (<div className={style.container2}>
        {/*Once Journey Starts*/}
        <div className={style.child1}>
          <h1 className={style.chosenCategory}>All</h1>
          <h1 className={style.category}>Tracking Insights </h1>
          <h1 className={style.category}>For You</h1>
          <h1 className={style.category}>Top Videos</h1>
          <h1 className={style.category}>Saved</h1>
        </div>
        <div className={style.child2}>
          <div className={style.heading}>Tracking Insights </div>
          {/*Tracking Cards*/}
          <div className={style.trackingRow}>
            <div className={style.child3}>
              <div className={style.subHeading}>Recent Symptoms </div>
              <Symptom symptomName={"Irregular Cycle"} severity={"moderate"}></Symptom>
              <Symptom symptomName={"Adominal Pain"} severity={"moderate"}></Symptom>
              <Symptom symptomName={"Hot Flashes"} severity={"extreme"}></Symptom>
            </div>
            <div className={style.child4}>
              <div className={style.subHeading}>Log Your Symptoms </div>
              <img alt="icon" src={logSymptoms} />
              
            </div>
            <div className={style.child5}>
              <div className={style.coloredHeading}>
                <div className={style.subHeading}>Today you might experience </div>
              </div>
              <div className={style.symptom}>Hot Flashes </div>
            </div>
            <div className={style.child6}>
              <div className={style.coloredHeading}>
                 <div className={style.subHeading}>Your week at a glance </div>
              </div>
              <div className={style.weekSnippet}>Hi Susan! Check out some possible insights about your upcoming week.</div>
              <img alt="icon" src={seeMoreArrow} />
            </div>
          </div>
          <div className={style.heading}>For You</div>
          <ContentRow thumbnailType = {"For You"}></ContentRow>
          <div className={style.heading}>Top Videos</div>
          <ContentRow thumbnailType = {"Top Videos"}></ContentRow>
        </div>
      </div>) }
      
    </div>
  );
};

export default Home;
