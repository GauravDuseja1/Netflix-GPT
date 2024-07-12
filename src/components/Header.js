import React from "react";
import netflixLogo from "../assets/netflixlogo.png";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img className="w-56" src={netflixLogo} alt="netflix.image" />
    </div>
  );
};

export default Header;
