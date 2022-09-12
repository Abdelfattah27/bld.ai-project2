import React from "react";
import Panner from "./ContentHeader.js/Panner";
import Footer from "./CoursePage/Footer/Footer";
import CoursesSection from "./Courses/CoursesSection";
import NavBar from "./NavBarComponents/NavBar";
function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <Panner></Panner>
      <CoursesSection></CoursesSection>
      <Footer />
    </>
  );
}

export default HomePage;
