import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CoursesSection from "./Components/Courses/CoursesSection";
import UdemyLogo from "./Components/NavBarComponents/UdemyLogo";
import NavBar from "./Components/NavBarComponents/NavBar";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Panner from "./Components/ContentHeader.js/Panner";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import CourseHomePage from "./Components/CoursePage/CourseHomePage";
function App() {
  return (
    <>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/HomePage/:courseId" element={<HomePage />} />
            <Route path="/course" element={<CourseHomePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
