import React from "react";

import style from "./home.module.scss";
import landingPageImg from "../../assets/landingPageImg.png";
import rightArrowImg from "../../assets/rightArrow.png";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.child1}>
        <h1 className={style.heading}>Your Ultimate </h1>
        <h1 className={style.heading}>Menopause </h1>
        <h1 className={style.heading}> Companion</h1>
        <div className={style.subHeading}>
          <p>Empower your menopause journey </p>
          <p>
            with our <b>all-in-one</b> platform.<b>Learn</b>,{" "}
          </p>
          <p>
            <b>Connect</b> and <b>Track</b> your progress.
          </p>
          <div className={style.startJourney}>
            <p>Start My Journey</p>
            <img alt="arrow" src={rightArrowImg} />
          </div>
        </div>
      </div>
      <div className={style.child2}>
        <img alt="img" src={landingPageImg} />
      </div>
    </div>
  );
};

export default Home;
