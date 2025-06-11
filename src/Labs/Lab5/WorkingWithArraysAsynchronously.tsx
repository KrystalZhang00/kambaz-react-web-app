import { useState, useEffect } from "react";
import { ListGroup, Form } from "react-bootstrap";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";  // ✅ 添加新导入
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // ========== 数据获取函数 ==========
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  
  // ========== 删除操作 ==========
  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  
  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
      setErrorMessage(null);  // 清除之前的错误
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  
  // ========== 创建操作 ==========
  const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };
  
  const postTodo = async () => {
    const newTodo = await client.postTodo({ 
      title: "New Posted Todo", 
      completed: false 
    });
    setTodos([...todos, newTodo]);
  };
  
  // ========== ✅ 更新操作 - 添加在这里 ==========
  const editTodo = (todo: any) => {
    const updatedTodos = todos.map(
      (t) => t.id === todo.id ? { ...todo, editing: true } : t
    );
    setTodos(updatedTodos);
  };
  
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);  // 清除之前的错误
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };
  
  // ========== useEffect ==========
  useEffect(() => {
    fetchTodos();
  }, []);
  
  // ========== 渲染 ==========
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <h4>
        Todos
        <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3" id="wd-create-todo" />
        <FaPlusCircle onClick={postTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
      </h4>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            {/* 删除按钮 */}
            <FaTrash onClick={() => removeTodo(todo)} className="text-danger float-end mt-1" id="wd-remove-todo" />
            <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />
            
            {/* ✅ 编辑按钮 - 添加在删除按钮之后 */}
            <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />
            
            {/* ✅ 复选框 - 修改添加 onChange */}
            <input 
              type="checkbox" 
              className="form-check-input me-2 float-start"
              defaultChecked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
            />
            
            {/* ✅ 标题显示/编辑 - 替换原来的 span */}
            {!todo.editing ? (
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
              </span>
            ) : (
              <Form.Control 
                className="w-50 float-start" 
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) =>
                  updateTodo({ ...todo, title: e.target.value })
                }
              />
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}