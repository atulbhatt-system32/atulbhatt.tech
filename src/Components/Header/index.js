import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DarkMode from "../DarkMode";
import SideBar from "../SideBar";
import { layoutStrings } from "../../static.db";

export default function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="flex justify-between p-4 lg:p-8"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), #222222",
      }}
    >
      <div
        className="font-semibold flex text-24 cursor-pointer font-logo"
        onClick={() => navigate("/")}
      >
        {layoutStrings.navbar.logoText}
      </div>
      <div className="flex">
        <DarkMode />
        <AiOutlineMenu
          className="text-primary-blue-600 ml-4 cursor-pointer"
          onClick={handleMenu}
        />
        {showMenu && (
          <div className="absolute md:top-16 top-12 md:right-8 right-0">
            <SideBar fun={handleMenu} />
          </div>
        )}
      </div>
    </div>
  );
}
