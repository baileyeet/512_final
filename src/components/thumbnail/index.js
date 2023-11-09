import React from "react";

import style from "./thumbnail.module.scss";
import categoryCircle from "../../assets/home-categoryCircle.svg";
const Thumbnail = ({ description, thumbnailImg, category, user }) => {
    return (
      <div className={style.container}>
        <img className={style.img} src={thumbnailImg} alt="img" />
        <p className={style.description}> {description} </p>
        {category ? (
        <div className={style.captionDetails}>
          <div className={style.imageContainer}>
            <img alt="icon" src={categoryCircle} />
          </div>
          <div className={style.textContainer}> 
            <p className={style.category}> {category} </p>
            <p className={style.user}> {user} </p>
          </div>
          
        </div>) : (<div></div>)}
        
        
      </div>
    );
  };
  
  export default Thumbnail;