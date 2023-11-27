import React from "react";

import style from "./tracking.module.scss";
import AccountDetail from "../../components/account-detail";
import { useTheme } from '../../components/theme-color';

const Tracking = () => {
  const { theme, updateTheme  } = useTheme();
  const bodyBgColor = {
    background: theme === "yellow" ? "#FFE6BB" : theme === "blue" ? "#E4F1E5" : "#ffefec",
    margin: 0,
    minHeight: '100vh',
  }
  console.log(theme);
  return (
    <body style = {bodyBgColor}>
    <div className={style.container}>
      <div className={style.accountDiv}>
        <div className={style.accText}>
          <h1>Account</h1>
          <span>Member since 2021</span>
        </div>
        <div className={style.colorScheme}>
          <span>Color Scheme:</span>
          <div className={style.circle} 
          style={{ backgroundColor: "#F6D1CC", border: "1px solid #F6D1CC" }}
          onClick={() => updateTheme("pink")}/>
          <div
            className={style.circle}
            style={{ backgroundColor: "#C2D3C4", border: "1px solid #C2D3C4" }}
            onClick={() => updateTheme("blue")}
          />
          <div
            className={style.circle}
            style={{ backgroundColor: "#FFC562", border: "1px solid #FFC562" }}
            onClick={() => updateTheme("yellow")}
          />
        </div>
      </div>
      

      {allData?.map(({ title, credentials, customizedData }, i) => {
        return (
          <AccountDetail
            title={title}
            credentials={credentials}
            customizedData={customizedData}
          />
        );
      })}
    </div>
    </body>
  );
};

export default Tracking;

const allData = [
  {
    title: "MEMBERSHIP AND BILLING",
    credentials: [
      { title: "Email: example.gmail.com" },
      { title: "Password: ********" },
      { title: "Phone: (111)-111-1111" },
    ],
    customizedData: [
      { title: "Change Account Email" },
      { title: "Change Password" },
      { title: "Change Phone Number" },
    ],
  },
  {
    title: "SECURITY & PRIVACY",
    credentials: [
      { title: "Control access to this account, see where you're logged in." },
    ],
    customizedData: [
      { title: "Manage Devices" },
      { title: "Sign out off all devices" },
    ],
  },
  {
    title: "HEALTH INFORMATION",
    credentials: [{ title: "View and manage your health data." }],
    customizedData: [{ title: "Manage Data" }, { title: "Delete all Data" }],
  },
  {
    title: "SOCIAL ACTIVITY",
    credentials: [{ title: "View and manage your social activity." }],
    customizedData: [
      { title: "Manage Activity" },
      { title: "Delete all Activity" },
      { title: "Activity Settings" },
    ],
  },
];
