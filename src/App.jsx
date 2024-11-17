import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage/Home";
import Method from "./Pages/MethodPage/Method";
import Tutors from "./Pages/TutorsPage/Tutors";
import Courses from "./Pages/CoursesPage/Courses";
import Resources from "./Pages/ResourcesPage/Resources";
import Kids from "./Pages/KidsPage/Kids";
import Business from "./Pages/BusinessPage/Business";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/method" element={<Method />} />
        <Route path="/featured-tutors" element={<Tutors />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/business" element={<Business/>} />
      </Routes>
    </>
  );
}

export default App;
