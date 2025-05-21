import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

export default function TOC() {
  const { pathname } = useLocation();

  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs" active={pathname === "/Labs"}>
          Labs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs/Lab1" active={pathname === "/Labs/Lab1"}>
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs/Lab2" active={pathname === "/Labs/Lab2"}>
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs/Lab3" active={pathname === "/Labs/Lab3"}>
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Kambaz" active={pathname === "/Kambaz"}>
          Kambaz
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="https://github.com/KrystalZhang00/kambaz-react-web-app"
          target="_blank"
          rel="noreferrer"
          active={false}
        >
          My GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
