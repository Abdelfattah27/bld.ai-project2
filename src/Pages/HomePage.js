import React from "react";
import Panner from "../Components/HomePageComponents/Panner/Panner";
import CoursesSection from "../Components/HomePageComponents/CoursesSection/CoursesSection";
import NavBar from "../Components/NavBarComponents/NavBar";
import Footer from "../Components/Footer/Footer";
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
