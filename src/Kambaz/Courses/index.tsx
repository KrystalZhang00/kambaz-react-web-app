import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  
  const course = courses.find((course: any) => course._id === cid);
  const isFaculty = currentUser?.role === "FACULTY";
  
  // Check if user is enrolled in this course
  const isEnrolled = enrollments.some(
    (enrollment: any) => 
      enrollment.user === currentUser?._id && 
      enrollment.course === cid
  );

  // If not faculty and not enrolled, redirect to dashboard
  if (!isFaculty && !isEnrolled) {
    return <Navigate to="/Kambaz/Dashboard" />;
  }

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block me-4">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Grades" element={<h2>Grades</h2>} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Zoom" element={<h2>Zoom</h2>} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}