import React, { useRef, useState } from "react";
import styles from "./CoursesStyles.module.css";
const Taps = () => {
  const refActiveTap = useRef();
  const setActive = function (e) {
    refActiveTap.current.classList.remove(styles.active);
    e.currentTarget.classList.add(styles.active);
    refActiveTap.current = e.currentTarget;
  };
  return (
    <div>
      <ul className={styles.list}>
        <li
          onClick={setActive}
          ref={refActiveTap}
          key={0}
          className={styles.tab + " " + styles.active}
        >
          Python
        </li>
        <li onClick={setActive} key={1} className={styles.tab}>
          Excel
        </li>
        <li onClick={setActive} key={2} className={styles.tab}>
          Web Development
        </li>
        <li onClick={setActive} key={3} className={styles.tab}>
          JavaScript
        </li>
        <li onClick={setActive} key={4} className={styles.tab}>
          Data science
        </li>
        <li onClick={setActive} key={5} className={styles.tab}>
          AWS Certificate
        </li>
        <li onClick={setActive} key={6} className={styles.tab}>
          Drawing
        </li>
      </ul>
    </div>
  );
};

export default Taps;
