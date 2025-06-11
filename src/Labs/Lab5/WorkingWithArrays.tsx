import { useState } from "react";
import { Form } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos </a><hr/>

      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" 
         className="btn btn-primary float-end" 
         href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <Form.Control 
        id="wd-todo-id" 
        defaultValue={todo.id} 
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} 
      />
      <hr />

      {/* Get completed Todo*/}
      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" 
         className="btn btn-primary me-2"
         href={`${API}?completed=true`}>  
        Get Completed Todos
      </a>
      <hr/>

      {/* Creste part*/}
      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo"  
         className="btn btn-primary"
         href={`${API}/create`}>
        Create Todo
      </a>
      <hr/>


      {/* Delete */}
      <h4>Deleting from an Array</h4>
      <a id="wd-delete-todo"  
         className="btn btn-primary float-end" 
         href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <Form.Control 
        defaultValue={todo.id} 
        className="w-50" 
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr/>

      <h4>Updating an Item in an Array</h4>
      <a id="wd-update-todo"  
         href={`${API}/${todo.id}/title/${todo.title}`} 
         className="btn btn-primary float-end">
        Update Todo
      </a>
      <Form.Control 
        id="wd-update-todo-id"
        defaultValue={todo.id} 
        className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <Form.Control 
        id="wd-update-todo-title"
        defaultValue={todo.title} 
        className="w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br /><br /><hr />

      <a id="wd-update-todo-completed"  
   href={`${API}/${todo.id}/completed/${todo.completed}`} 
   className="btn btn-success float-end">
  Update Completed
</a>
<Form.Check
  id="wd-todo-completed"
  type="checkbox"
  label={`Complete Todo ID = ${todo.id}`}
  checked={todo.completed}
  onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
  className="float-start"
/>
<br /><br /><hr />

{/* Update Description - YOU ALREADY HAVE THIS */}
<a id="wd-update-todo-description"  
   href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`} 
   className="btn btn-secondary float-end">
  Update Description
</a>
<Form.Control
  id="wd-todo-description"
  as="textarea"
  rows={3}
  placeholder={`Describe Todo ID = ${todo.id}`}
  defaultValue={todo.description}
  onChange={(e) => setTodo({ ...todo, description: e.target.value })}
  className="w-75 float-start"
/>
<br /><br /><br /><br /><hr />
    </div>
);}
