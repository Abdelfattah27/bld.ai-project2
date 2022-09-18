import React from "react";
import styles from "./NavBarStyles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavButton({ disc, custom }) {
  return (
    <button
      className={
        styles.button +
        " " +
        styles[custom] +
        " d-none ms-2 me-2 text-nowrap d-md-inline-block d-sm-none"
      }
    >
      {disc}
    </button>
  );
}

export default NavButton;
