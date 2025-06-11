import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({
    username: "",
    password: "",
    verifyPassword: ""
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    setError("");
    
    // 验证密码是否匹配
    if (user.password !== user.verifyPassword) {
      setError("Passwords do not match");
      return;
    }
    
    // 验证必填字段
    if (!user.username || !user.password) {
      setError("Please fill in all fields");
      return;
    }
    
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kambaz/Account/Profile");
    } catch (err: any) {
      if (err.response && err.response.status === 400) {
        setError(err.response.data.message || "Username already in use");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div id="wd-signup-screen" className="p-3">
      <h3 className="mb-3">Sign up</h3>
      
      {error && (
        <Alert variant="danger" className="mb-3" style={{ maxWidth: "300px" }}>
          {error}
        </Alert>
      )}
      
      <Form style={{ maxWidth: "300px" }}>
        <Form.Control 
          id="wd-username"
          className="mb-2"
          placeholder="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Form.Control 
          id="wd-password"
          className="mb-2"
          type="password" 
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Form.Control 
          id="wd-password-verify"
          className="mb-2"
          type="password" 
          placeholder="verify password"
          value={user.verifyPassword}
          onChange={(e) => setUser({ ...user, verifyPassword: e.target.value })}
        />
        <Button 
          id="wd-signup-btn"
          variant="primary" 
          className="w-100 mb-2" 
          onClick={signup}
        >
          Sign up
        </Button>
        <Link 
          id="wd-signin-link"
          to="/Kambaz/Account/Signin" 
          className="text-primary"
        >
          Sign in
        </Link>
      </Form>
    </div>
  );
}