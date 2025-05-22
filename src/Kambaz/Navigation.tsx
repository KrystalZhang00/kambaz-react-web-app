import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegCircleUser, FaInbox } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { LiaFlaskSolid } from "react-icons/lia";


export default function KambazNavigation() {
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* Northeastern logo */}
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern" />
      </ListGroup.Item>

      {/* Account - white icon + text */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Account"
        className="text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text-white" />
        <br />
        Account
      </ListGroup.Item>

      {/* Dashboard - red on white */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Dashboard"
        className="text-center border-0 bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </ListGroup.Item>

      {/* Courses - red icon, white text, black background */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Dashboard"
        className="text-center border-0 bg-black text-white"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </ListGroup.Item>

      {/* Calendar */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Calendar"
        className="text-center border-0 bg-black text-white"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </ListGroup.Item>

      {/* Inbox */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Inbox"
        className="text-center border-0 bg-black text-white"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </ListGroup.Item>

      {/* Labs */}
      <ListGroup.Item
        as={Link}
        to="/Labs"
        className="text-center border-0 bg-black text-white"
      >
        <LiaFlaskSolid className="fs-1 text-danger" />
        <br />
        Labs
      </ListGroup.Item>
    </ListGroup>
  );
}
