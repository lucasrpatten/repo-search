import React from "react";
import { Link } from "react-router-dom";

const SearchNavBar = () => {
  const navSearchStyles = {
    position: "absolute",
    float: "left",
    width: "100%",
    height: "5vw",
    backgroundColor: "#81d681",
  };

  const verifyRepoButton = {
    position: "relative",
    color: "purple",
    textDecoration: "none",
    top: "1vw",
    borderRadius: "200px",
    backgroundColor: "green",
  };

  return (
    <div style={navSearchStyles}>
      <Link style={verifyRepoButton} to="./verify-repo">
        Verify Repo
      </Link>
    </div>
  );
};

export default SearchNavBar;
