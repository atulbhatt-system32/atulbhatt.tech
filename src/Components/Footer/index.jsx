import styles from "./Footer.module.scss";
import Facebook from "../../assets/images/footer/facebook.svg";
import Instagram from "../../assets/images/footer/instagram.svg";
import Twitter from "../../assets/images/footer/twitter.svg";
import Linkedin from "../../assets/images/footer/linkedin.svg";
import { layoutStrings, links } from "../../static.db";
const Footer = () => {
  return (
    <footer className={`${styles.footer} dark:bg-midnight`}>
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
            className="cursor-pointer"
          />
          <img
            src={Twitter}
            alt="Twitter"
            onClick={() => window.open(links.socialLinks.twitter.url)}
            className="cursor-pointer"
          />
          <img
            src={Facebook}
            alt="Facebook"
            onClick={() => window.open(links.socialLinks.facebook.url)}
            className="cursor-pointer"
          />
          <img
            src={Instagram}
            alt="Instagram"
            onClick={() => window.open(links.socialLinks.instagram.url)}
            className="cursor-pointer"
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
