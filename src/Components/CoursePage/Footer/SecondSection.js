import React from "react";
import styles from "./FooterStyles.module.css";

function SecondSection() {
  return (
    <div className={styles.firstSection}>
      <p className={styles.companies}>
        Top companies choose{" "}
        <span className={styles.udemyBusiness}>Udemy Business</span> to build
        in-demand career skills.
      </p>
      <div className={styles.companiesLogo}>
        <img
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          alt="Nasdaq"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          alt="volkswagen"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          alt="box"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          alt="NetApp"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          alt="eventbrite"
        />
      </div>
    </div>
  );
}

export default SecondSection;
