import React from "react";
import LanguageIcon from "../../NavBarComponents/LanguageIcon";
import styles from "./FooterStyles.module.css";

function SectionThree() {
  return (
    <>
      <div className={styles.thirdSection}>
        <div className={styles.footerLinks}>
          <ul>
            <li>Udemy Business</li>
            <li>Teach on Udemy </li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie setting</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
        </div>
        <button className={styles.languageBtn}>
          <LanguageIcon /> <span>English</span>
        </button>
      </div>
      <div className={styles.copyRights}>
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          alt="udemy logos"
        />
        <span className={styles.copyRight}>© 2022 Udemy, Inc.</span>
      </div>
    </>
  );
}

export default SectionThree;
