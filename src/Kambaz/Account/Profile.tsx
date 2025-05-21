import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4">
      <h3 className="mb-3">Profile</h3>
      <Form className="w-100" style={{ maxWidth: "400px" }}>
        <Form.Control defaultValue="alice" placeholder="username" className="mb-2" />
        <Form.Control defaultValue="123" type="password" placeholder="password" className="mb-2" />
        <Form.Control defaultValue="Alice" placeholder="First Name" className="mb-2" />
        <Form.Control defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
        <Form.Control defaultValue="2000-01-01" type="date" className="mb-2" />
        <Form.Control defaultValue="alice@wonderland.com" type="email" className="mb-2" />
        <Form.Select defaultValue="User" className="mb-3">
          <option>User</option>
          <option>Admin</option>
          <option>Faculty</option>
          <option>Student</option>
        </Form.Select>
        <Link to="/Kambaz/Account/Signin">
          <Button className="w-100" variant="danger">Signout</Button>
        </Link>
      </Form>
    </div>
  );
}
