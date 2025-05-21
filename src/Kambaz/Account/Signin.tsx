import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  const navigate = useNavigate();

  const handleSignin = () => {
    
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="p-3">
      <h3 className="mb-3">Signin</h3>
      <Form style={{ maxWidth: "300px" }}>
        <Form.Control
          type="text"
          placeholder="username"
          className="mb-2"
        />
        <Form.Control
          type="password"
          placeholder="password"
          className="mb-2"
        />
        <Button variant="primary" className="w-100 mb-2" onClick={handleSignin}>
          Signin
        </Button>
        <Link to="/Kambaz/Account/Signup" className="text-primary">
          Signup
        </Link>
      </Form>
    </div>
  );
}
