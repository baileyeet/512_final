import React, { useState } from "react";

import style from "./landing.module.scss";
import landingPageImg from "../../assets/landingPageImg.png";
import rightArrowImg from "../../assets/rightArrow.png";
import ContentRow from "../../components/content-row";
import categoryCircle from "../../assets/home-categoryCircle.svg";
import Symptom from "../../components/symptom"
import seeMoreArrow from "../../assets/home-seeMoreArrow.svg"
import logSymptoms from "../../assets/home-logSymptomsIcon.svg"
import { Link } from "react-router-dom";

const Landing = () => {
  const [journeyStarted, setJourneyStarted] = useState(false);

  const handleStartJourney = () => {
    setJourneyStarted(true);
  };
  return (
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
          <Link
                to="/home"
                className={style.startJourney}>
                <p>Start My Journey</p>
                <img alt="arrow" src={rightArrowImg} />
              </Link>
        </div>
      </div>
      <div className={style.child2}>
        <img alt="img" src={landingPageImg} />
      </div>
      </div>
  );
};

export default Landing;
