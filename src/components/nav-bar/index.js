import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./navbar.module.scss";
import profileImg from "../../assets/profileImg.png";

const Navbar = () => {
  const { pathname } = useLocation();

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
                  pathname === data?.path ? style.activeClass : style.link
                }`}
              >
                {data?.name}
              </Link>
            </p>
          );
        })}
      </div>
      {pathname === "/" ? (
        <button className={style.btn}>Sign In</button>
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
