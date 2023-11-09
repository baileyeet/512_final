import React from "react";

import style from "./video-reel.module.scss";
import thumbnail1 from "../../assets/resources-video1.png";
import thumbnail2 from "../../assets/resources-video2.jpeg";
import thumbnail3 from "../../assets/resources-video3.jpeg";
import Thumbnail from "../thumbnail";
export default function VideoReel() {
    const thumbnailData = [
          {
            thumbnailImg: thumbnail1,
            description: "Menopause 101",
          },
          {
            thumbnailImg: thumbnail2,
            description: "Communicating with Doctors",
          },
          {
            thumbnailImg: thumbnail3,
            description: "What I Eat in a Week",
          },
          {
            thumbnailImg: thumbnail1,
            description: "Menopause 101",
          },
          {
            thumbnailImg: thumbnail2,
            description: "Communicating with Doctors",
          },
          {
            thumbnailImg: thumbnail3,
            description: "What I Eat in a Week",
          },
          {
            thumbnailImg: thumbnail1,
            description: "Menopause 101",
          },
          {
            thumbnailImg: thumbnail2,
            description: "Communicating with Doctors",
          },
          {
            thumbnailImg: thumbnail3,
            description: "What I Eat in a Week",
          },
          {
            thumbnailImg: thumbnail1,
            description: "Menopause 101",
          },
          {
            thumbnailImg: thumbnail2,
            description: "Communicating with Doctors",
          },
          {
            thumbnailImg: thumbnail3,
            description: "What I Eat in a Week",
          },
      ];
    return (
        <div className={style.thumbnailRow}>
            {thumbnailData?.map(({ thumbnailImg, description }) => {
            return <Thumbnail description={description} thumbnailImg={thumbnailImg} />;
        })}
        </div>
    );
  };
  