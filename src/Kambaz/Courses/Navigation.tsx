// src/Kambaz/Courses/Navigation.tsx
import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams(); // get course ID from URL
  const { pathname } = useLocation(); // get current path

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link);
        return (
          <Link
            key={link}
            to={`/Kambaz/Courses/${cid}/${link}`}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${isActive ? "active" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}

