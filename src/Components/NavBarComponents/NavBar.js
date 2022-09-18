import React from "react";
import UdemyLogo from "./UdemyLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "./SearchForm";
import NavBarLinks from "./NavBarLinks";
import Styles from "./NavBarStyles.module.css";
import ShoppingIcon from "./ShoppingIcon";
import NavButton from "./NavButton";
import LanguageIcon from "./LanguageIcon";
import Menu from "./Menu";
function NavBar() {
  return (
    <nav className={Styles.navBarSection}>
      <Menu></Menu>
      <UdemyLogo></UdemyLogo>
      <NavBarLinks name="Categories"></NavBarLinks>
      <SearchForm></SearchForm>
      <NavBarLinks name="Udemy Business"></NavBarLinks>
      <NavBarLinks name="Teach on Udemy"></NavBarLinks>
      <ShoppingIcon></ShoppingIcon>
      <NavButton disc="Log IN"></NavButton>
      <NavButton disc="Sign up" custom="signUp"></NavButton>
      <LanguageIcon></LanguageIcon>
    </nav>
  );
}

export default NavBar;
