import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    
    navigate("/Kambaz/Account/Profile");
  };

  return (
    <div id="wd-signup-screen" className="p-3">
      <h3 className="mb-3">Signup</h3>
      <Form style={{ maxWidth: "300px" }}>
        <Form.Control placeholder="username" className="mb-2" />
        <Form.Control type="password" placeholder="password" className="mb-2" />
        <Form.Control type="password" placeholder="verify password" className="mb-2" />
        <Button variant="primary" className="w-100 mb-2" onClick={handleSignup}>
          Signup
        </Button>
        <Link to="/Kambaz/Account/Signin" className="text-primary">Signin</Link>
      </Form>
    </div>
  );
}
