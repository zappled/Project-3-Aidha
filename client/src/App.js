/** @format */

import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CourseInfo from "./pages/mdw/CourseInfo";
import GetInvolved from "./pages/volunteer/GetInvolved";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Courses from "./pages/mdw/Courses";
import SignUpPage from "./pages/mdw/SignUpPage";
import StudentStories from "./pages/mdw/StudentStories";
import VolunteerWithUs from "./pages/volunteer/VolunteerWithUs";
import VolunteerRequirements from "./pages/volunteer/VolunteerRequirements";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* MDW User Flow */}
        <Route path="/students/stories" element={<StudentStories />} />
        <Route path="/students/courses" element={<Courses />} />
        <Route
          path="/students/courses/financial_education"
          element={<CourseInfo />}
        />
        <Route path="students/courses/sign_up" element={<SignUpPage />} />
        {/* Volunteers User Flow */}
        <Route path="/volunteers" element={<GetInvolved />} />
        <Route
          path="/volunteers/volunteer_with_us"
          element={<VolunteerWithUs />}
        />
        <Route
          path="/volunteers/requirements"
          element={<VolunteerRequirements />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
