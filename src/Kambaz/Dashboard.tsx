import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { enrollUser, unenrollUser } from "./Courses/Enrollments/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  
  // State for showing all courses vs enrolled only
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Local state for the form
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    image: "/images/reactjs.jpg"
  });

  const handleAddCourse = () => {
    dispatch(addCourse(course));
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      description: "New Description",
      image: "/images/reactjs.jpg"
    });
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
  };

  const handleDeleteCourse = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) => 
        enrollment.user === currentUser?._id && 
        enrollment.course === courseId
    );
  };

  const handleEnrollment = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenrollUser({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollUser({ userId: currentUser._id, courseId }));
    }
  };

  // Filter courses based on enrollment status and showAllCourses flag
  const filteredCourses = courses.filter((course: any) => {
    if (isFaculty || showAllCourses) return true;
    return isEnrolled(course._id);
  });

  return (
    <div className="p-4" id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {!isFaculty && (
          <Button 
            variant="primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Show Enrolled" : "Show All Courses"}
          </Button>
        )}
      </div>
      <hr />
      
      {isFaculty && (
        <>
          <h5>
            New Course
            <Button 
              variant="primary" 
              className="float-end"
              id="wd-add-new-course-click"
              onClick={handleAddCourse}
            >
              Add
            </Button>
            <button 
              className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse} 
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          
          <Form.Control 
            value={course.name} 
            className="mb-2"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <Form.Control 
            as="textarea"
            value={course.description} 
            rows={3}
            placeholder="Course Description"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          
          <hr />
        </>
      )}
      
      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
        {!isFaculty && !showAllCourses && " - Enrolled"}
      </h2>
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {filteredCourses.map((course: any) => (
            <Col 
              key={course._id}
              className="wd-dashboard-course" 
              style={{ width: "300px" }}
            >
              <Card>
                <Card.Img 
                  src={course.image || "/images/reactjs.jpg"} 
                  variant="top" 
                  width="100%" 
                  height={160} 
                />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name}
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {course.description}
                  </Card.Text>
                  
                  {/* Go button - only show if enrolled or faculty */}
                  {(isEnrolled(course._id) || isFaculty) && (
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                      <Button variant="primary">Go</Button>
                    </Link>
                  )}
                  
                  {/* Enrollment button for students */}
                  {!isFaculty && (
                    <Button
                      variant={isEnrolled(course._id) ? "danger" : "success"}
                      className="ms-2"
                      onClick={() => handleEnrollment(course._id)}
                    >
                      {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                    </Button>
                  )}
                  
                  {/* Edit and Delete buttons for faculty */}
                  {isFaculty && (
                    <>
                      <button 
                        onClick={(event) => {
                          event.preventDefault();
                          handleDeleteCourse(course._id);
                        }} 
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button 
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}