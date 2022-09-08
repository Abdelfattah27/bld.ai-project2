import React, { useEffect, useState } from "react";
import NavBar from "../NavBarComponents/NavBar";
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
import styles from "./CourseStyles.module.css";

function CourseHomePage() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/course")
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setCourses(response);
        setError("");
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        setCourses(null);
        setError("Something went wrong while loading course");
      });
  }, []);
  let renderState = [];
  if (error) {
    renderState = (
      <div className={styles.error}>
        Something went wrong while loading course 😟😟
      </div>
    );
  } else if (loading || courses.length === 0) {
    renderState = (
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    renderState = (
      <>
        <Header data={courses[0]["Header"]}></Header>
        <CourseTabs></CourseTabs>
        <LearningDescription
          data={courses[0]["learning-objective"]}
        ></LearningDescription>
        <CourseContent data={courses[0]["curriculum_context"]}></CourseContent>
        <Requirements data={courses[0]["Requirements"]}></Requirements>
        <Description data={courses[0]["Description"]}></Description>
        <Instractors data={courses[0]["Instructor"]}></Instractors>
        <StudentFeedback data={courses[0]["studentFeedback"]}></StudentFeedback>
        <Reviews data={courses[0]["reviews"]}></Reviews>
        <Footer></Footer>
      </>
    );
  }
  return (
    <>
      <NavBar></NavBar>
      {renderState}
    </>
  );
}

export default CourseHomePage;
