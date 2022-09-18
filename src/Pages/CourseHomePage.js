import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBarComponents/NavBar";
import CourseTabs from "../Components/CoursePage/CourseTabs";
import Header from "../Components/CoursePage/CoursePageHeader/Header";
import LearningDescription from "../Components/CoursePage/LearningDescription";
import CourseContent from "../Components/CoursePage/CourseContent";
import Requirements from "../Components/CoursePage/Requirements";
import Description from "../Components/CoursePage/Description";
import StudentFeedback from "../Components/CoursePage/StudentFeedBack/StudentFeedback";
import Reviews from "../Components/CoursePage/Reviews/Reviews";
import styles from "../Components/CoursePage/CourseStyles.module.css";
import { useParams } from "react-router-dom";
import Loading from "../Components/GeneralComponents/Loading";
import Footer from "../Components/Footer/Footer";
import PreviewCourseLayout from "../Components/CoursePage/CoursePageHeader/PreviewCourseLayout";
import Instractors from "../Components/CoursePage/Instructors/Instractors";

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
    renderState = <div className={styles.error}>{error} 😟😟</div>;
  } else if (loading || courses.length === 0) {
    renderState = <Loading />;
  } else {
    renderState = (
      <>
        <Header
          data={courses[courseId % 2]["Header"]}
          sidebar={courses[courseId % 2]["sidebar"]}
        ></Header>
        <PreviewCourseLayout data={courses[courseId % 2]["sidebar"]} />

        <div className={styles.topContainer}>
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
          <Description
            data={courses[courseId % 2]["Description"]}
          ></Description>
          <Instractors data={courses[courseId % 2]["Instructor"]}></Instractors>
          <StudentFeedback
            data={courses[courseId % 2]["studentFeedback"]}
          ></StudentFeedback>
          <Reviews data={courses[courseId % 2]["reviews"]}></Reviews>
        </div>
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
