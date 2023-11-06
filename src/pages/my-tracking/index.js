import React from "react";

import style from "./tracking.module.scss";
import AccountDetail from "../../components/account-detail";

const Tracking = () => {
  return (
    <div className={style.container}>
      <div className={style.accountDiv}>
        <div className={style.accText}>
          <h1>Account</h1>
          <span>Member since 2021</span>
        </div>
        <div className={style.colorScheme}>
          <span>Color Scheme:</span>
          <div className={style.circle} style={{ border: "1px solid" }} />
          <div
            className={style.circle}
            style={{ backgroundColor: "#C2D3C4", border: "1px solid #C2D3C4" }}
          />
          <div
            className={style.circle}
            style={{ backgroundColor: "#FFC562", border: "1px solid #FFC562" }}
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
