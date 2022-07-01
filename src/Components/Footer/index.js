import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "../../Assets/images/footer";
const Footer = () => {
  return (
    <footer className="bg-stone-800 px-24 py-10">
      {/* CONTACT */}
      <div>
        <div>Contact</div>
        <div>
          <div>mob- 81999999999</div>
          <div>mail id - ankiutaindfno@shijdfid.com</div>
        </div>
      </div>
      {/* LINKS */}
      <div>
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={Twitter} alt="Twitter" />
        <img src={Linkedin} alt="Linkedin" />
      </div>
      {/* COPYRIGHT */}
      <div>© 2022 Ankystudio. . All rights reserved</div>
    </footer>
  );
};
export default Footer;
