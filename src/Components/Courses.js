import React from "react";
import Card from "./Card";
import Styles from "./Styles.module.css";

function Courses() {
  const data = [
    {
      id: "aseafe2",
      rate: 4.4,
      image: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
      title: "Learn Python: The Complete Python Programming Course",
      instructor: "jose portila",
      stars: 4,
      students: 1432,
      price: 39,
      bestSeller: true,
    },
    {
      id: "aseafe3",
      rate: 4.3,
      image: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
      title: "Learn Python: The Complete Python Programming Course",
      instructor: "jose3 portila",
      stars: 5,
      students: 1437,
      price: 390,
      bestSeller: false,
    },
    {
      id: "aseafe4",
      rate: 4.1,
      image: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
      title: "Learn Python: The Complete Python Programming Course",
      instructor: "Abdelfattah Hamdi",
      stars: 3,
      students: 1412,
      price: 3900,
      bestSeller: true,
    },
    {
      id: "aseafo2",
      rate: 4.0,
      image: "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
      title: "Learning Python for Data Analysis and Visualization",
      instructor: "Ahmed Alaa",
      stars: 1,
      students: 1532,
      price: 389,
      bestSeller: false,
    },
    {
      id: "aseade2",
      rate: 4.1,
      image: "https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
      title: "Python for Beginners - Learn Programming from scratch",
      instructor: "jose porta",
      stars: 4,
      students: 9432,
      price: 3990,
      bestSeller: true,
    },
    {
      id: "aseafe7",
      rate: 3.4,
      image: "https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
      title: "Python Beyond the Basics - Object-Oriented Programming",
      instructor: "jose ganzory",
      stars: 4,
      students: 1432,
      price: 3909,
      bestSeller: false,
    },
    {
      id: "bseafe2",
      rate: 4.4,
      image: "https://img-c.udemycdn.com/course/750x422/482754_7146_6.jpg",
      title: "Python From Scratch & Selenium WebDriver QA Automation 2022",
      instructor: "jose portila",
      stars: 4,
      students: 1432,
      price: 39,
      bestSeller: true,
    },
    {
      id: "aceafe2",
      rate: 4.4,
      image: "https://img-c.udemycdn.com/course/750x422/519554_da68_6.jpg",
      title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
      instructor: "jose portila",
      stars: 4,
      students: 1432,
      price: 39,
      bestSeller: true,
    },
  ];
  const renderCourses = data.map((course) => (
    <Card key={course.id}>{course}</Card>
  ));
  return <div className={Styles.courses}>{renderCourses}</div>;
}

export default Courses;
