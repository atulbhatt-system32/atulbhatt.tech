import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "../../Assets/images";
const Footer = () => {
  return (
    <footer className=" px-7 py-10 2xl:px-24 md:px-16 2xl:py-10 md:py-8 bg-midnight">
      {/* CONTACT */}
      <div className="border-b border-solid border-white pb-6 flex flex-col gap-4 text-white-900">
        <div className="flex flex-col gap-6 pb-9">
          <div className="opacity-90 font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
            Contact
          </div>
          <div className="flex flex-col gap-2 font-normal text-sm md:text-base xl:text-lg 2xl:text-xl opacity-60">
            <div>Phone : 81999999999</div>
            <div>E-mail : ankiutaindfno@gmail.com</div>
          </div>
        </div>
        {/* LINKS */}
        <div className="flex gap-5 md:gap-8">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
          <img src={Linkedin} alt="Linkedin" />
        </div>
        {/* COPYRIGHT */}
        <div className="font-normal text-sm md:text-base xl:text-lg 2xl:text-xl opacity-60">
          © 2022 Ankystudio. All rights reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
