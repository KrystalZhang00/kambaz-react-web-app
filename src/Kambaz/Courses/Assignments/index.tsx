import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((a) => a.course === cid);

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
        {assignments.map((a) => (
          <ListGroup.Item
            key={a._id}
            as={Link}
            to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`}
            className="border-start border-4 border-success mb-2 text-decoration-none text-dark"
          >
            <div className="d-flex justify-content-between">
              <div>
                <div className="fw-bold text-primary">{a.title}</div>
                <div className="text-muted small">
                  Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="text-success"><FaCheckCircle /></div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
