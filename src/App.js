import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import CourseHomePage from "./Pages/CourseHomePage";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/course/:courseId" element={<CourseHomePage />} />
    </Routes>
  );
}

export default App;
