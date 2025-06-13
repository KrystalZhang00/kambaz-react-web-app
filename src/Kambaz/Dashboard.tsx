import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { enrollUser, unenrollUser, setEnrollments } from "./Courses/Enrollments/reducer";
import * as enrollmentsClient from "./Courses/Enrollments/client";

export default function Dashboard({
  courses,
  addCourse,
  deleteCourse,
  updateCourse
}: {
  courses: any[],
  addCourse: (course: any) => Promise<void>,
  deleteCourse: (courseId: string) => Promise<void>,
  updateCourse: (course: any) => Promise<void>
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  
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

  // Fetch enrollments when component mounts
  useEffect(() => {
    const fetchEnrollments = async () => {
      if (currentUser) {
        try {
          const myEnrollments = await enrollmentsClient.getMyEnrollments();
          dispatch(setEnrollments(myEnrollments));
        } catch (error) {
          console.error("Error fetching enrollments:", error);
        }
      }
    };
    fetchEnrollments();
  }, [currentUser, dispatch]);

  // Check if user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) => 
        enrollment.user === currentUser?._id && 
        enrollment.course === courseId
    );
  };

  // Handle enrollment toggle
  const handleEnrollmentToggle = async (courseId: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    try {
      if (isEnrolled(courseId)) {
        await enrollmentsClient.unenrollFromCourse(courseId);
        dispatch(unenrollUser({ userId: currentUser._id, courseId }));
      } else {
        await enrollmentsClient.enrollInCourse(courseId);
        dispatch(enrollUser({ userId: currentUser._id, courseId }));
      }
    } catch (error) {
      console.error("Error toggling enrollment:", error);
    }
  };

  // Filter courses based on enrollment status and showAllCourses flag
  const displayedCourses = showAllCourses || isFaculty
    ? courses
    : courses.filter(course => isEnrolled(course._id));

  const handleAddCourse = async () => {
    await addCourse(course);
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

  const handleUpdateCourse = async () => {
    await updateCourse(course);
  };

  const handleDeleteCourse = async (courseId: string) => {
    await deleteCourse(courseId);
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
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
      
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2 id="wd-dashboard-published">
          Published Courses ({displayedCourses.length})
        </h2>
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
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => (
            <Col 
              key={course._id}
              className="wd-dashboard-course" 
              style={{ width: "300px" }}
            >
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
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
                    <Button variant="primary">Go</Button>
                    
                    {/* Enrollment/Unenrollment button for students */}
                    {!isFaculty && showAllCourses && (
                      <Button
                        variant={isEnrolled(course._id) ? "danger" : "success"}
                        size="sm"
                        className="float-end"
                        onClick={(e) => handleEnrollmentToggle(course._id, e)}
                      >
                        {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                      </Button>
                    )}
                    
                    {isFaculty && (
                      <>
                        <button 
                          onClick={async (event) => {
                            event.preventDefault();
                            await handleDeleteCourse(course._id);
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
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}