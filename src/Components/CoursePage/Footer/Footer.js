import React from "react";
import FirstSection from "./FirstSection";
import styles from "./FooterStyles.module.css";
import SecondSection from "./SecondSection";
import SectionThree from "./SectionThree";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <FirstSection />
      <SecondSection />
      <SectionThree />
    </div>
  );
}

export default Footer;
