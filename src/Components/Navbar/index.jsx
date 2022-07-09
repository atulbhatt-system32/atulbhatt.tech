import React from "react";
import { LightMode, HamBurger } from "../../Assets/images";
const Navbar = () => {
  return (
    <nav className="p-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="flex justify-between">
        <div>Logo</div>
        <div className="flex gap-4">
          <img src={LightMode} alt="light-mode" />
          <img src={HamBurger} alt="hamburger" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
