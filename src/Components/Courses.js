import React, { useEffect, useState } from "react";
import Card from "./Card";
import Styles from "./Styles.module.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setError("");
      })
      .catch((err) => {
        setError(err);
        setCourses([]);
      });
  }, [error]);
  return error ? (
    <div className={Styles.error}>Failed to load Courses 😟😟</div>
  ) : courses.length > 0 ? (
    <div className={Styles.courses}>
      {courses.map((course) => (
        <Card key={course.id}>{course}</Card>
      ))}
    </div>
  ) : (
    <div className={Styles.loading}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Courses;
