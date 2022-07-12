import React from "react";
import styles from "./Footer.module.scss";
import { Facebook, Instagram, Twitter, Linkedin } from "../../Assets/images";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* CONTACT */}
      <div className={styles.footer__wrap}>
        <div className={styles.footer_contact}>
          <div className={styles.footer_contact_head}>Contact</div>
          <div className={styles.footer_contact_body}>
            <div>Phone : 81999999999</div>
            <div>E-mail : ankiutaindfno@gmail.com</div>
          </div>
        </div>
        {/* LINKS */}
        <div className={styles.footer_social}>
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
          <img src={Linkedin} alt="LinkedIn" />
        </div>
        {/* COPYRIGHT */}
        <div className={styles.footer_legal}>
          © 2022 Ankystudio. All rights reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
