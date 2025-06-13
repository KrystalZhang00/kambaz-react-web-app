import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const isNew = aid === "new";
  const assignment = assignments.find((a: any) => a._id === aid);

  const [formData, setFormData] = useState({
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    dueDate: "2024-05-13",
    availableFrom: "2024-05-06",
    availableUntil: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isNew && assignment) {
      setFormData({
        title: assignment.title || "New Assignment",
        description: assignment.description || "New Assignment Description",
        points: assignment.points || 100,
        dueDate: assignment.dueDate || "2024-05-13",
        availableFrom: assignment.availableFrom || "2024-05-06",
        availableUntil: assignment.availableUntil || "",
      });
    }
  }, [assignment, isNew]);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (isNew) {
        // Create new assignment
        const newAssignment = await assignmentsClient.createAssignment(cid!, formData);
        dispatch(addAssignment(newAssignment));
      } else {
        // Update existing assignment
        const updatedAssignment = await assignmentsClient.updateAssignment({
          _id: aid,
          ...formData,
          course: cid
        });
        dispatch(updateAssignment(updatedAssignment));
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save assignment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form id="wd-assignments-editor" className="m-3">
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Assignment Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          readOnly={!isFaculty}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-description">
        <Form.Control
          as="textarea"
          rows={6}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          readOnly={!isFaculty}
          placeholder="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-points">
        <Form.Label className="fw-bold">Points</Form.Label>
        <Form.Control
          type="number"
          value={formData.points}
          onChange={(e) => setFormData({ ...formData, points: parseInt(e.target.value) || 0 })}
          readOnly={!isFaculty}
        />
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="wd-group">
        <Form.Label column sm={3}>Assignment Group</Form.Label>
        <Col sm={9}>
          <Form.Select disabled={!isFaculty}>
            <option>ASSIGNMENTS</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="wd-display-grade-as">
        <Form.Label column sm={3}>Display Grade as</Form.Label>
        <Col sm={9}>
          <Form.Select disabled={!isFaculty}>
            <option>Percentage</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
        <Form.Label column sm={3}>Submission Type</Form.Label>
        <Col sm={9}>
          <Form.Select className="mb-2" disabled={!isFaculty}>
            <option>Online</option>
          </Form.Select>
          <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" disabled={!isFaculty} />
          <Form.Check type="checkbox" label="Website URL" id="wd-website-url" disabled={!isFaculty} />
          <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" disabled={!isFaculty} />
          <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" disabled={!isFaculty} />
          <Form.Check type="checkbox" label="File Upload" id="wd-file-upload" disabled={!isFaculty} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="wd-assign-to">
        <Form.Label column sm={3}>Assign to</Form.Label>
        <Col sm={9}>
          <Form.Control type="text" value="Everyone" readOnly={!isFaculty} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="wd-due-date">
        <Form.Label column sm={3}>Due</Form.Label>
        <Col sm={9}>
          <Form.Control
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            readOnly={!isFaculty}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="wd-available-from">
        <Form.Label column sm={3}>Available from</Form.Label>
        <Col sm={9}>
          <Form.Control
            type="date"
            value={formData.availableFrom}
            onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
            readOnly={!isFaculty}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="wd-available-until">
        <Form.Label column sm={3}>Until</Form.Label>
        <Col sm={9}>
          <Form.Control
            type="date"
            value={formData.availableUntil}
            onChange={(e) => setFormData({ ...formData, availableUntil: e.target.value })}
            readOnly={!isFaculty}
          />
        </Col>
      </Form.Group>

      <div className="d-flex justify-content-end gap-2">
        <Button as={Link as any} to={`/Kambaz/Courses/${cid}/Assignments`} variant="secondary">
          Cancel
        </Button>
        {isFaculty && (
          <Button 
            onClick={handleSave} 
            variant="danger"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        )}
      </div>
    </Form>
  );
}