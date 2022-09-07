import React from "react";
import styles from "../NavBarStyles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
function UdemyLogo() {
  return (
    <>
      {/* <Button>hello</Button> */}
      <img
        className={"me-2 " + styles.logo}
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        alt="udemy logo"
      ></img>
    </>
  );
}

export default UdemyLogo;
