import React from "react";
import styles from "./NavBarStyles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
function UdemyLogo() {
  return (
    <>
      {/* <Button>hello</Button> */}
      <a href="/">
        <img
          className={"me-2 " + styles.logo}
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="udemy logo"
        ></img>
      </a>
    </>
  );
}

export default UdemyLogo;
