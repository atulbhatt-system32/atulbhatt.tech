import React from "react";
import styles from "./Footer.module.scss";
import { Facebook, Instagram, Twitter, Linkedin } from "../../Assets/images";
import { layoutStrings, links } from "../../static.db";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* CONTACT */}
      <div className={styles.footer__wrap}>
        <div className={styles.footer_contact}>
          <div className={styles.footer_contact_head}>Contact</div>
          <div className={styles.footer_contact_body}>
            <div>{layoutStrings.footer.phone}</div>
            <div>{layoutStrings.footer.email}</div>
          </div>
        </div>
        {/* LINKS */}
        <div className={styles.footer_social}>
          <img
            src={Linkedin}
            alt="LinkedIn"
            onClick={() => window.open(links.socialLinks.linkedIn.url)}
          />
          <img
            src={Twitter}
            alt="Twitter"
            onClick={() => window.open(links.socialLinks.twitter.url)}
          />
          <img
            src={Facebook}
            alt="Facebook"
            onClick={() => window.open(links.socialLinks.facebook.url)}
          />
          <img
            src={Instagram}
            alt="Instagram"
            onClick={() => window.open(links.socialLinks.instagram.url)}
          />
        </div>
        {/* COPYRIGHT */}
        <div className={styles.footer_legal}>
          {layoutStrings.footer.copyright}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
