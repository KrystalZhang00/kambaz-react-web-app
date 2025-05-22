import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="pe-3">
      {/* Search + Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup className="w-50">
          <InputGroup.Text><FaSearch /></InputGroup.Text>
          <Form.Control placeholder="Search for Assignments" />
        </InputGroup>

        <div>
          <Button variant="secondary" className="me-2">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      {/* Title bar */}
      <h5 className="fw-bold d-flex align-items-center">
        <BsGripVertical className="me-2 fs-5" />
        ASSIGNMENTS <span className="ms-2 fw-normal text-muted">(40% of Total)</span>
      </h5>

      {/* Assignment List */}
      <ListGroup variant="flush">

        <ListGroup.Item
          as={Link}
          to="/Kambaz/Courses/1234/Assignments/123"
          className="border-start border-4 border-success mb-2 text-decoration-none text-dark"
        >
          <div className="d-flex justify-content-between">
            <div>
              <div className="fw-bold text-primary">A1 - ENV + HTML</div>
              <div className="text-muted small">
                Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="text-success"><FaCheckCircle /></div>
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          as={Link}
          to="/Kambaz/Courses/1234/Assignments/124"
          className="border-start border-4 border-success mb-2 text-decoration-none text-dark"
        >
          <div className="d-flex justify-content-between">
            <div>
              <div className="fw-bold text-primary">A2 - CSS + BOOTSTRAP</div>
              <div className="text-muted small">
                Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="text-success"><FaCheckCircle /></div>
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          as={Link}
          to="/Kambaz/Courses/1234/Assignments/125"
          className="border-start border-4 border-success mb-2 text-decoration-none text-dark"
        >
          <div className="d-flex justify-content-between">
            <div>
              <div className="fw-bold text-primary">A3 - JAVASCRIPT + REACT</div>
              <div className="text-muted small">
                Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="text-success"><FaCheckCircle /></div>
          </div>
        </ListGroup.Item>

      </ListGroup>
    </div>
  );
}
