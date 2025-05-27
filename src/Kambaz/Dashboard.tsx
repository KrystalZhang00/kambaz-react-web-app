import { Card, Button, Row, Col } from "react-bootstrap";
import * as db from "./Database";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = db.courses;
  // const courses = [
  //   { title: "CS1234 React JS", image: "reactjs.jpg" },
  //   { title: "CS2345 Node.js", image: "nodejs.jpg" },
  //   { title: "CS3456 MongoDB", image: "mongodb.jpg" },
  //   { title: "CS4567 Express.js", image: "express.jpg" },
  //   { title: "CS5678 HTML & CSS", image: "html.jpg" },
  //   { title: "CS6789 JavaScript", image: "javascript.jpg" },
  //   { title: "CS7890 AWS Cloud", image: "aws.jpg" },
  // ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={2} lg={4} className="g-4">
        {courses.map((course) => (
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to={`/Kambaz/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img src={course.image} variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  {course.name} </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {course.description} </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>);}
