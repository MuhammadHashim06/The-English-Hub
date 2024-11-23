import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage/Home";
import Method from "./Pages/MethodPage/Method";
import Tutors from "./Pages/TutorsPage/Tutors";
import Courses from "./Pages/CoursesPage/Courses";
import Resources from "./Pages/ResourcesPage/Resources";
import Kids from "./Pages/KidsPage/Kids";
import Business from "./Pages/BusinessPage/Business";
import AiTool from "./Pages/AiTool/AiTool";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/SignupPage/Signup";
import EmailandPassword from "./Pages/SignupPage/EmailandPassword";
import SignupOptions from "./Pages/SignupPage/SignupOption";
import UserDetail from "./Pages/SignupPage/UserDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/*" element={<Signup />}>
          <Route index element={<SignupOptions />} />
          <Route path="email&password" element={<EmailandPassword />} />
          <Route path="userdetail" element={<UserDetail />} />
        </Route>
        <Route path="/method" element={<Method />} />
        <Route path="/featured-tutors" element={<Tutors />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tool" element={<AiTool />} />
      </Routes>
    </>
  );
}

export default App;
