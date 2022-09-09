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
import { useParams } from "react-router-dom";

function CourseHomePage() {
  const { courseId } = useParams();
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
      })
      .catch((error) => {
        setLoading(false);
        setCourses(null);
        setError("Something went wrong while loading course");
      });
  }, []);
  let renderState = [];
  if (error || isNaN(courseId)) {
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
        <Header data={courses[courseId % 2]["Header"]}></Header>
        <CourseTabs></CourseTabs>
        <LearningDescription
          data={courses[courseId % 2]["learning-objective"]}
        ></LearningDescription>
        <CourseContent
          data={courses[courseId % 2]["curriculum_context"]}
        ></CourseContent>
        <Requirements
          data={courses[courseId % 2]["Requirements"]}
        ></Requirements>
        <Description data={courses[courseId % 2]["Description"]}></Description>
        <Instractors data={courses[courseId % 2]["Instructor"]}></Instractors>
        <StudentFeedback
          data={courses[courseId % 2]["studentFeedback"]}
        ></StudentFeedback>
        <Reviews data={courses[courseId % 2]["reviews"]}></Reviews>
      </>
    );
  }
  return (
    <>
      <NavBar></NavBar>
      {renderState}
      <Footer></Footer>
    </>
  );
}

export default CourseHomePage;
