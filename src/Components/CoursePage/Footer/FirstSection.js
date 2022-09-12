import React from "react";
import styles from "./FooterStyles.module.css";
function FirstSection() {
  return (
    <div className={styles.firstSection}>
      <div>
        <h5>Teach the world online</h5>
        <span>
          Create an online video course, reach students across the globe, and
          earn money
        </span>
      </div>
      <button className={styles.teachOnUdemy}>Teach on Udemy</button>
    </div>
  );
}

export default FirstSection;
