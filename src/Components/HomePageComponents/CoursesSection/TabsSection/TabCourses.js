import React, { useState, useEffect } from "react";
import CoursesTitle from "./Courses/CoursesTitle";
import Explore from "./Explore";
import CoursesDescription from "./Courses/CoursesDescription";
import styles from "../CoursesStyles.module.css";
import Loading from "../../../GeneralComponents/Loading";
import Courses from "./Courses/Courses";

function TabCourses({ tabLink }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/${tabLink}`)
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setData(response);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to load taps");
        setData([]);
      });
  }, [tabLink]);

  let renderState = [];
  if (error) {
    renderState = (
      <div className={styles.error}>Failed to load Courses 😟😟</div>
    );
  } else if (loading) {
    renderState = <Loading />;
  } else {
    renderState = (
      <section id="Courses" className={styles.allCourses}>
        <CoursesTitle title={data.header}></CoursesTitle>
        <CoursesDescription description={data.description}></CoursesDescription>
        <Explore topic={tabLink}></Explore>
        <Courses coursesData={data.courses}></Courses>
      </section>
    );
  }

  return <>{renderState}</>;
}

export default TabCourses;
