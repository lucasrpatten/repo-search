import React from "react";
import { Link, Outlet } from "react-router-dom";
import setPageStyle from "./../../functions/setPageStyle.jsx";
import verifyRepoStyle from "./styles/style.VerifyRepo.js";
const VerifyRepo = () => {
  (function(){setPageStyle(verifyRepoStyle)}());
  return (
    <>
      <div>hiddeaf</div>
      <Link to="/">hi</Link>
    </>
  );
};
export default VerifyRepo;
