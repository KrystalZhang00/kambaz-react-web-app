import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="p-3">
      <h3 className="mb-3">Signin</h3>
      <Form style={{ maxWidth: "300px" }}>
        <Form.Control
        defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          type="text"
          placeholder="username"
          className="mb-2"
        />
        <Form.Control
        defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          type="password"
          placeholder="password"
          className="mb-2"
        />
        <Button variant="primary" className="w-100 mb-2" onClick={signin}>
          Signin
        </Button>
        <Link to="/Kambaz/Account/Signup" className="text-primary">
          Signup
        </Link>
      </Form>
    </div>
  );
}
