import React from "react";

import style from "./content.module.scss";
import thumbnail1 from "../../assets/resources-background.png";
import thumbnail2 from "../../assets/resources-video2.jpeg";
import thumbnail3 from "../../assets/resources-video3.jpeg";
import thumbnail1Vid from "../../assets/home-thumbnail1.jpeg";
import thumbnail2Vid from "../../assets/home-thumbnail2.png";
import thumbnail3Vid from "../../assets/home-thumbnail3.jpeg";
import Thumbnail from "../thumbnail";
export default function ContentRow({thumbnailType}) {
    const thumbnailDataForYou = [
        {
            thumbnailImg: thumbnail3,
            category: "Mental Health",
            user: "@Lisarose111"
          },
          {
            thumbnailImg: thumbnail1,
            category: "Mental Health",
            user: "@Lisarose111"
          },
          {
            thumbnailImg: thumbnail2,
            category: "Mental Health",
            user: "@Lisarose111"
          },
          
      ];
      const thumbnailDataTopVideos = [
        {
          thumbnailImg: thumbnail1Vid,
          category: "Mental Health",
          user: "@Lisarose111"
        },
        {
          thumbnailImg: thumbnail2Vid,
          category: "Mental Health",
          user: "@Lisarose111"
        },
        {
          thumbnailImg: thumbnail3Vid,
          category: "Mental Health",
          user: "@Lisarose111"
        },
    ];
    const thumbnailData = thumbnailType === "For You" ? thumbnailDataForYou : thumbnailDataTopVideos;
    return (
        <div className={style.thumbnailRow}>
            {thumbnailData?.map(({ thumbnailImg, category, user }) => {
            return <Thumbnail thumbnailImg={thumbnailImg} category = {category} user = {user}/>;
        })}
        </div>
    );
  };
  