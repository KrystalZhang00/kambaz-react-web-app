
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { Button, FormControl, ListGroup } from "react-bootstrap";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className="d-flex align-items-center gap-2">
      <FormControl
        value={todo.title}
        className="me-auto"
        onChange={(e) =>
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
      />
      <Button
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
        variant="warning"
      >
        Update
      </Button>
      <Button
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
        variant="success"
      >
        Add
      </Button>
    </ListGroup.Item>
  );
}
