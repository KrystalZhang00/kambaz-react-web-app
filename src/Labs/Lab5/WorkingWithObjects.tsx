import { useState } from "react";
import { Form } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  
  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines",
    course: "RS101"
  });
  
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      {/* Assignment 部分 */}
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a>
      <hr/>
      
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>
      <hr/>
      
      <h4>Modifying Properties</h4>
      
      {/* Assignment Title */}
      <div className="mb-3">
        <label>Assignment Title:</label>
        <a id="wd-update-assignment-title"
           className="btn btn-primary float-end"
           href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Title
        </a>
        <Form.Control 
          className="w-75" 
          id="wd-assignment-title"
          defaultValue={assignment.title} 
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      
      {/* Assignment Score */}
      <div className="mb-3">
        <label>Assignment Score:</label>
        <a id="wd-update-assignment-score"
           className="btn btn-primary float-end"
           href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
        <Form.Control 
          type="number"
          className="w-75" 
          id="wd-assignment-score"
          defaultValue={assignment.score} 
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })}
        />
      </div>
      
      {/* Assignment Completed */}
      <div className="mb-3">
        <label>Assignment Completed:</label>
        <a id="wd-update-assignment-completed"
           className="btn btn-primary float-end"
           href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
        <Form.Check 
          type="checkbox"
          id="wd-assignment-completed"
          checked={assignment.completed} 
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })}
        />
      </div>
      
      <hr/>
      
      {/* Module Name */}
      <div className="mb-3">
        <label>Module Name:</label>
        <a id="wd-update-module-name"
           className="btn btn-primary float-end"
           href={`${MODULE_API_URL}/name/${module.name}`}>
          Update Module Name
        </a>
        <Form.Control 
          className="w-75" 
          id="wd-module-name"
          defaultValue={module.name} 
          onChange={(e) =>
            setModule({ ...module, name: e.target.value })}
        />
      </div>
      
      {/* Module Description */}
      <div className="mb-3">
        <label>Module Description:</label>
        <a id="wd-update-module-description"
           className="btn btn-primary float-end"
           href={`${MODULE_API_URL}/description/${module.description}`}>
          Update Module Description
        </a>
        <Form.Control 
          as="textarea"
          rows={3}
          className="w-75" 
          id="wd-module-description"
          defaultValue={module.description} 
          onChange={(e) =>
            setModule({ ...module, description: e.target.value })}
        />
      </div>
      
      <hr />
    </div>
  );
}