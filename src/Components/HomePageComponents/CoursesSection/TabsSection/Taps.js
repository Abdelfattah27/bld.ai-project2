import React, { useState, useEffect } from "react";

import styles from "../CoursesStyles.module.css";
import Loading from "../../../GeneralComponents/Loading";

import TabCourses from "./TabCourses";
function Taps() {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/HomePageTaps")
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
  }, []);

  let renderState = [];
  if (error) {
    renderState = <div className={styles.error}>{error} 😟😟</div>;
  } else if (loading) {
    renderState = <Loading />;
  } else {
    renderState = (
      <>
        <ul className={styles.list}>
          {data.map((tab) => (
            <li
              onClick={() => setActiveTab(tab.id)}
              key={tab.id}
              className={
                styles.tab + " " + (activeTab === tab.id ? styles.active : "")
              }
            >
              {tab.name}
            </li>
          ))}
        </ul>
        <TabCourses tabLink={data[activeTab].link}></TabCourses>
      </>
    );
  }

  return <>{renderState}</>;
}

export default Taps;
