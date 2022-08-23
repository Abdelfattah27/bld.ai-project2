import React from "react";
import Card from "./Card";
import Styles from "./Styles.module.css";

function Courses() {
  const data = [
    {
      id: "aseafe2",
      rate: 4.4,
      image: "",
      title: "learn python from zero to hero to hero to hero",
      instructor: "jose portila",
      stars: 4,
      students: 1432,
      price: 39,
      bestSeller: true,
    },
    {
      id: "aseafe3",
      rate: 4.3,
      image: "",
      title: "learn python from zero to hero to hero to hero",
      instructor: "jose3 portila",
      stars: 5,
      students: 1437,
      price: 390,
      bestSeller: false,
    },
    {
      id: "aseafe4",
      rate: 4.1,
      image: "",
      title: "learn python from zero to hero ",
      instructor: "Abdelfattah Hamdi",
      stars: 3,
      students: 1412,
      price: 3900,
      bestSeller: true,
    },
    {
      id: "aseafo2",
      rate: 4.0,
      image: "",
      title: "learn python from nothing to everything",
      instructor: "Ahmed Alaa",
      stars: 1,
      students: 1532,
      price: 389,
      bestSeller: false,
    },
    {
      id: "aseade2",
      rate: 4.1,
      image: "",
      title: "Teach python from zero to hero to hero to hero",
      instructor: "jose porta",
      stars: 4,
      students: 9432,
      price: 3990,
      bestSeller: true,
    },
    {
      id: "aseafe7",
      rate: 3.4,
      image: "",
      title: "learn python from zero to hero to hero to hero",
      instructor: "jose ganzory",
      stars: 4,
      students: 1432,
      price: 3909,
      bestSeller: false,
    },
    {
      id: "bseafe2",
      rate: 4.4,
      image: "",
      title: "learn python from zero to hero to hero to hero",
      instructor: "jose portila",
      stars: 4,
      students: 1432,
      price: 39,
      bestSeller: true,
    },
    {
      id: "aceafe2",
      rate: 4.4,
      image: "",
      title: "learn python from zero to hero to hero to hero",
      instructor: "jose portila",
      stars: 4,
      students: 1432,
      price: 39,
      bestSeller: true,
    },
  ];
  const renderCourses = data.map((course) => <Card>{course}</Card>);
  return <div className={Styles.courses}>{renderCourses}</div>;
}

export default Courses;
