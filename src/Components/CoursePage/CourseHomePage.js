import React from "react";
import NavBar from "../NavBarComponents/NavBar";
import PreviewCourseLayout from "./PreviewCourseLayout";
import CourseTabs from "./CourseTabs";
import Header from "./Header";
import LearningDescription from "./LearningDescription";
import CourseContent from "./CourseContent";
import Requirements from "./Requirements";
import Description from "./Description";
import Instractors from "./Instractors";
import StudentFeedback from "./StudentFeedback";
import Reviews from "./Reviews";
import Footer from "./Footer/Footer";

function CourseHomePage() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <CourseTabs></CourseTabs>
      <LearningDescription></LearningDescription>
      {/* <PreviewCourseLayout></PreviewCourseLayout> */}
      <CourseContent></CourseContent>
      <Requirements></Requirements>
      <Description></Description>
      <Instractors></Instractors>
      <StudentFeedback></StudentFeedback>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
}

export default CourseHomePage;
