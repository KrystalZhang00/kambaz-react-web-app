import { Button, Form, InputGroup, ListGroup, Modal } from "react-bootstrap";
import { FaSearch, FaCheckCircle, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import { useState, useEffect } from "react";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const isFaculty = currentUser?.role === "FACULTY";
  
  // State for delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);
  
  const courseAssignments = assignments.filter((a: any) => a.course === cid);

  // Fetch assignments from server
  const fetchAssignments = async () => {
    if (cid) {
      try {
        const assignments = await assignmentsClient.findAssignmentsForCourse(cid);
        dispatch(setAssignments(assignments));
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (assignmentToDelete) {
      try {
        await assignmentsClient.deleteAssignment(assignmentToDelete._id);
        dispatch(deleteAssignment(assignmentToDelete._id));
      } catch (error) {
        console.error("Error deleting assignment:", error);
        alert("Failed to delete assignment");
      }
    }
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  };

  return (
    <div id="wd-assignments" className="pe-3">
      {/* Search + Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup className="w-50">
          <InputGroup.Text><FaSearch /></InputGroup.Text>
          <Form.Control placeholder="Search for Assignments" id="wd-search-assignment" />
        </InputGroup>

        {isFaculty && (
          <div>
            <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
              <FaPlus className="me-1" /> Group
            </Button>
            <Link to={`/Kambaz/Courses/${cid}/Assignments/new`}>
              <Button variant="danger" id="wd-add-assignment">
                <FaPlus className="me-1" /> Assignment
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Title bar */}
      <h5 className="fw-bold d-flex align-items-center" id="wd-assignments-title">
        <BsGripVertical className="me-2 fs-5" />
        ASSIGNMENTS <span className="ms-2 fw-normal text-muted">40% of Total</span>
        {isFaculty && <Button variant="link" className="ms-2 p-0">+</Button>}
      </h5>

      {/* Assignment List */}
      <ListGroup variant="flush" id="wd-assignment-list">
        {courseAssignments.map((a: any) => (
          <ListGroup.Item
            key={a._id}
            className="wd-assignment-list-item border-start border-4 border-success mb-2 p-0"
          >
            <div className="d-flex justify-content-between align-items-center p-3">
              <Link
                to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`}
                className="wd-assignment-link text-decoration-none text-dark flex-grow-1"
              >
                <div className="fw-bold">{a.title}</div>
                <div className="text-muted small">
                  Multiple Modules | Due {a.dueDate || "May 13 at 11:59pm"} | {a.points || 100} pts
                </div>
              </Link>
              <div className="d-flex align-items-center">
                {isFaculty && (
                  <Button
                    variant="link"
                    className="text-danger p-1"
                    onClick={() => handleDeleteClick(a)}
                  >
                    <FaTrash />
                  </Button>
                )}
                <FaCheckCircle className="text-success ms-2" />
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove "{assignmentToDelete?.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}