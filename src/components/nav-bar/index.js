import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../theme-color";

import style from "./navbar.module.scss";
import profileImg from "../../assets/profileImg.png";

const Navbar = () => {
  const { theme} = useTheme();
  const { pathname } = useLocation();
  const activeClassStyle = theme === "yellow" ? style.activeClassY : theme === "blue" ? style.activeClassB : style.activeClass;
  const buttonBgColor = {background: theme === "yellow" ? "#FFC562" : theme === "blue" ? "rgba(66, 95, 128, 0.50)" : "#e2aca5"};
  return (
    <div className={style.container}>
      {/*<h1 className={style.logoText}>MenoMate</h1>*/}
      <Link
                to="/"
                className={style.logoText}
              >
                <h1 className={style.logoText}>MenoMate</h1>
              </Link>
      <div className={style.menuText}>
        {menuData?.map((data, index) => {
          return (
            <p>
              <Link
                to={data?.path}
                key={index}
                className={`${
                  pathname === data?.path ? activeClassStyle : style.link
                }`}
              >
                {data?.name}
              </Link>
            </p>
          );
        })}
      </div>
      {pathname === "/" ? (
        <button className={style.btn} style = {buttonBgColor}>Sign In</button>
      ) : (
        <Link to={"/profile"}>
          <img
            className={style.profile}
            alt="profile img"
            src={profileImg}
            width={40}
          />
        </Link>
      )}
    </div>
  );
};

export default Navbar;

const menuData = [
  { name: "Home", path: "/home" },
  { name: "Symptoms Map", path: "/map" },
  { name: "Resources", path: "/resources" },
  { name: "Community", path: "/community" },
  //{ name: "My Tracking", path: "/tracking" },
];
