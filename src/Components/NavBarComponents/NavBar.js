import React from "react";
import Categories from "./Categories";
import UdemyLogo from "./UdemyLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "./SearchForm";
import UdemyBusiness from "./UdemyBusiness";
import NavBarLinks from "./NavBarLinks";
import Styles from "../NavBarStyles.module.css";
import ShoppingIcon from "./ShoppingIcon";
import NavButton from "./NavButton";
import LanguageIcon from "./LanguageIcon";
import Menu from "./Menu";
function NavBar() {
  return (
    <nav
      className={
        " position-fixed bg-white d-flex justify-content-md-center justify-content-between align-items-center flex-nowrap w-100 " +
        Styles.navBarSection
      }
    >
      <Menu></Menu>
      <UdemyLogo></UdemyLogo>
      <NavBarLinks
        name="Categories"
        classes="d-md-flex d-sm-none"
      ></NavBarLinks>
      <SearchForm></SearchForm>
      <NavBarLinks name="Udemy Business" classes="d-md-none"></NavBarLinks>
      <NavBarLinks name="Teach on Udemy" classes="d-md-none "></NavBarLinks>
      <ShoppingIcon></ShoppingIcon>
      <NavButton disc="Log IN"></NavButton>
      <NavButton disc="Sign up" custom="signUp"></NavButton>
      <LanguageIcon></LanguageIcon>
    </nav>
  );
}

export default NavBar;
