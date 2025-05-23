import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-11/12 mx-auto mt-7 sora">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
