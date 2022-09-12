import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import CourseHomePage from "./Components/CoursePage/CourseHomePage";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/HomePage/:courseId" element={<HomePage />} />
          <Route path="/course/:courseId" element={<CourseHomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
