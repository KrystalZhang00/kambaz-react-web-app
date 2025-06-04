import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "./Database";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      {/* New Course Form Section */}
      <h5>
        New Course
        <Button 
          variant="primary" 
          className="float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </Button>
        <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5>
      <br />
      
      {/* Form inputs for new course */}
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
      
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.filter((course) => {
            if (isFaculty) return true;
            return enrollments.some(
              (enrollment) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
              );})
            .map((course) => (
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
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                    </button>
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>
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