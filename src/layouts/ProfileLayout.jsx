import React from "react";
import { Outlet } from "react-router";
import MyProfile from "../pages/MyProfile/MyProfile";

const ProfileLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <MyProfile></MyProfile>
    </div>
  );
};

export default ProfileLayout;
