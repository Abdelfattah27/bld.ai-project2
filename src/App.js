import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CoursesSection from "./Components/Courses/CoursesSection";
import UdemyLogo from "./Components/NavBarComponents/UdemyLogo";
import NavBar from "./Components/NavBarComponents/NavBar";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Panner from "./Components/ContentHeader.js/Panner";
function App() {
  return (
    <>
      {/* <Button className="p-3 m-2 bg-secondary text-white">Hello World</Button> */}
      <NavBar></NavBar>
      <Panner></Panner>
      <CoursesSection></CoursesSection>
    </>
  );
}

export default App;
