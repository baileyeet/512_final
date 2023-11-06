import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./navbar.module.scss";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.container}>
      <h1 className={style.logoText}>MenoMate</h1>
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
      <button className={style.btn}>Sign In</button>
    </div>
  );
};

export default Navbar;

const menuData = [
  { name: "Home", path: "/" },
  { name: "Symptoms Map", path: "/map" },
  { name: "Resources", path: "/resources" },
  { name: "Community", path: "/community" },
  { name: "My Tracking", path: "/tracking" },
];
