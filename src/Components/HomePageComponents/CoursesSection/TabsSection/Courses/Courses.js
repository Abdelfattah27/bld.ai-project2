import React from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Card from "./CourseCard/Card";
import NoCourses from "./NoCourses";
import MySwiper from "./Swiper/MySwiper";
import { useSearchParams } from "react-router-dom";

function Courses({ coursesData }) {
  const [searchKeyWord, setSearch] = useSearchParams();

  const courseId = searchKeyWord.get("search");

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
    return hello;
  };
  const filteredCourses = filterCourses(coursesData);

  return filteredCourses.length ? (
    <MySwiper>
      {filteredCourses.map((course) => (
        <SwiperSlide key={course.id}>
          <Card>{course}</Card>
        </SwiperSlide>
      ))}
    </MySwiper>
  ) : (
    <NoCourses search={courseId} />
  );
}

export default Courses;
