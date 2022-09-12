import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Styles from "./CoursesStyles.module.css";
import NoCourses from "./NoCourses";

function Courses() {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  function isSubString(str, subStr) {
    str = str.toLowerCase().trim();
    subStr = subStr.toLowerCase().trim();
    if (!subStr) return true;

    for (let i = 0; i <= str.length - subStr.length; i++) {
      const subOfOriginString = str.slice(i, i + subStr.length);
      if (subOfOriginString === subStr) {
        return true;
      }
    }
    return false;
  }
  const filterCourses = (courses) => {
    const hello = courses.filter((ele) =>
      isSubString(ele.title, courseId || "")
    );
    // console.log(courseId);
    setCourses(hello);
  };
  useEffect(() => {
    fetch("http://localhost:8000/HomePageCourses")
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        filterCourses(response);
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
  } else if (loading) {
    renderState = (
      <div className={Styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else if (courses.length === 0) {
    renderState = <NoCourses search={courseId} />;
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
}

export default Courses;
