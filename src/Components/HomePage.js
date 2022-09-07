import React from "react";
import Panner from "./ContentHeader.js/Panner";
import CoursesSection from "./Courses/CoursesSection";
import NavBar from "./NavBarComponents/NavBar";
function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <Panner></Panner>
      <CoursesSection></CoursesSection>
    </>
  );
}

export default HomePage;
