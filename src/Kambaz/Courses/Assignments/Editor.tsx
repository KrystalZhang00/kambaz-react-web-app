import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(a => a._id === aid);

  return (
    <Form id="wd-assignments-editor" className="m-3">
      {/* Assignment Name */}
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue={assignment?.title || ""} />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-3" controlId="wd-description">
        <Form.Control
          as="textarea"
          rows={6}
          defaultValue={assignment?.description || "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n• Your full name and section\n• Links to each of the lab assignments\n• Link to the Kambaz application\n• Links to all relevant source code repositories\n\nThe Kambaz application should include a link to navigate back to the landing page."}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group className="mb-3" controlId="wd-points">
        <Form.Label className="fw-bold">Points</Form.Label>
        <Form.Control type="number" defaultValue={assignment?.points || 100} />
      </Form.Group>

      {/* Assignment Group */}
      <Form.Group as={Row} className="mb-3" controlId="wd-group">
        <Form.Label column sm={3}>Assignment Group</Form.Label>
        <Col sm={9}>
          <Form.Select>
            <option>ASSIGNMENTS</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Display Grade */}
      <Form.Group as={Row} className="mb-3" controlId="wd-display-grade-as">
        <Form.Label column sm={3}>Display Grade as</Form.Label>
        <Col sm={9}>
          <Form.Select>
            <option>Percentage</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Submission Type */}
      <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
        <Form.Label column sm={3}>Submission Type</Form.Label>
        <Col sm={9}>
          <Form.Select className="mb-2">
            <option>Online</option>
          </Form.Select>
          <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
          <Form.Check type="checkbox" label="Website URL" id="wd-website-url" />
          <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" />
          <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" />
          <Form.Check type="checkbox" label="File Upload" id="wd-file-upload" />
        </Col>
      </Form.Group>

      {/* Assign To */}
      <Form.Group as={Row} className="mb-3" controlId="wd-assign-to">
        <Form.Label column sm={3}>Assign to</Form.Label>
        <Col sm={9}>
          <Form.Control type="text" defaultValue="Everyone" />
        </Col>
      </Form.Group>

      {/* Due, Available From, Until */}
      <Form.Group as={Row} className="mb-3" controlId="wd-due-date">
        <Form.Label column sm={3}>Due</Form.Label>
        <Col sm={9}>
          <Form.Control type="date" defaultValue="2024-05-13" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="wd-available-from">
        <Form.Label column sm={3}>Available from</Form.Label>
        <Col sm={9}>
          <Form.Control type="date" defaultValue="2024-05-06" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4" controlId="wd-available-until">
        <Form.Label column sm={3}>Until</Form.Label>
        <Col sm={9}>
          <Form.Control type="date" />
        </Col>
      </Form.Group>

      {/* Buttons */}
      <div className="d-flex justify-content-end gap-2">
        <Button as={Link} to={`/Kambaz/Courses/${cid}/Assignments`} variant="secondary">Cancel</Button>
        <Button as={Link} to={`/Kambaz/Courses/${cid}/Assignments`} variant="danger">Save</Button>
      </div>
    </Form>
  );
}