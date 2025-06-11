import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";  // 添加 Alert
import { useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState<string>("");  // 添加错误状态
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const signin = async () => {
    setError("");  // 清除之前的错误
    try {
      const user = await client.signin(credentials);
      if (!user) {
        setError("Invalid username or password");
        return;
      }
      dispatch(setCurrentUser(user));
      navigate("/Kambaz/Dashboard");
    } catch (err: any) {
      // 处理服务器返回的错误
      if (err.response && err.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div id="wd-signin-screen" className="p-3">
      <h3 className="mb-3">Sign in</h3>
      
      {/* 显示错误提醒 */}
      {error && (
        <Alert variant="danger" className="mb-3" style={{ maxWidth: "300px" }}>
          {error}
        </Alert>
      )}
      
      <Form style={{ maxWidth: "300px" }}>
        <Form.Control
          id="wd-username"
          value={credentials.username || ""}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          type="text"
          placeholder="username"
          className="mb-2"
        />
        <Form.Control
          id="wd-password"
          value={credentials.password || ""}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          type="password"
          placeholder="password"
          className="mb-2"
        />
        <Button 
          id="wd-signin-btn"
          variant="primary" 
          className="w-100 mb-2" 
          onClick={signin}
        >
          Sign in
        </Button>
        <Link 
          id="wd-signup-link"
          to="/Kambaz/Account/Signup" 
          className="text-primary"
        >
          Sign up
        </Link>
      </Form>
    </div>
  );
}