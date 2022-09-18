import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavBarStyles.module.css";
function NavBarLinks({ name, classes }) {
  return (
    <div
      className={
        "d-none ms-2 me-2 d-lg-flex justify-content-center align-items-center text-nowrap d-sm-none " +
        styles.links +
        " " +
        classes
      }
    >
      {name}
    </div>
  );
}

export default NavBarLinks;
