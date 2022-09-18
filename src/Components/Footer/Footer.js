import React from "react";
import TeachOnUdemySection from "./TeachOnUdemySection";
import styles from "./FooterStyles.module.css";
import UdemyBusinessSection from "./UdemyBusinessSection";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <TeachOnUdemySection />
      <UdemyBusinessSection />
      <FooterLinks />
    </div>
  );
}

export default Footer;
