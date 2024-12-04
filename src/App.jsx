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
import UserAgreement from './Pages/UserAgreement/UserAgrement'
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Admin from "./Pages/Admin/Admin";
import AdminLogin from "./Pages/Admin/components/AdminLogin";
import AdminPanel from "./Pages/Admin/components/AdminPanel";
import TeacherDetails from "./Pages/SignupPage/TeacherDetails";
import Role from "./Pages/SignupPage/Role";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Admin/>}>
        <Route index element={<AdminLogin/>} />
        <Route path="adminpanel" element={<AdminPanel/>}  />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup/*" element={<Signup />}>
          <Route index element={<SignupOptions />} />
          <Route path="role" element={<Role />} />

          <Route path="email&password" element={<EmailandPassword />} />
          <Route path="userdetail" element={<UserDetail />} />
          <Route path="teacherdetails" element={<TeacherDetails />} />
        </Route>
        <Route path="/method" element={<Method />} />
        <Route path="/featured-tutors" element={<Tutors />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tool" element={<AiTool />} />
        <Route path="/useragreement" element={<UserAgreement />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
      </Routes>
    </>
  );
}

export default App;
