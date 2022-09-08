import React, { useEffect, useState } from "react";
import Card from "./Card";
import Styles from "./CoursesStyles.module.css";

function Courses() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/HomePageCourses")
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setCourses(response);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to load Courses");
        setCourses([]);
      });
  }, []);

  let renderState = [];
  if (error) {
    renderState = (
      <div className={Styles.error}>Failed to load Courses 😟😟</div>
    );
  } else if (loading || courses.length === 0) {
    renderState = (
      <div className={Styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    renderState = (
      <div className={Styles.courses}>
        {courses.map((course) => (
          <Card key={course.id}>{course}</Card>
        ))}
      </div>
    );
  }
  return renderState;
  // return (
  //   <>
  //     {loading ? (
  //       <div className={Styles.loading}>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //       </div>
  //     ) : error ? (
  //       <div className={Styles.error}>Failed to load Courses 😟😟</div>
  //     ) : (
  //       <div className={Styles.courses}>
  //         {courses.map((course) => (
  //           <Card key={course.id}>{course}</Card>
  //         ))}
  //       </div>
  //     )}
  //   </>
  // );

  // return error ? (
  //   <div className={Styles.error}>Failed to load Courses 😟😟</div>
  // ) : courses.length > 0 ? (

  // ) : (
  //   <div className={Styles.loading}>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //   </div>
  // );
}

export default Courses;
