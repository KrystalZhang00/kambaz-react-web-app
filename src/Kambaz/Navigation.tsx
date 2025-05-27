import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaRegCircleUser, FaInbox } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";

export default function KambazNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kambaz/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kambaz/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];

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
        className={`text-center border-0 ${
          pathname.includes("/Kambaz/Account") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("/Kambaz/Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroup.Item>

      {/* Data-driven navigation items */}
      {links.map(({ label, path, icon: Icon }) => {
        const isActive = pathname.startsWith(path);
        return (
          <ListGroup.Item
            key={label}
            as={Link}
            to={path}
            className={`text-center border-0 ${
              isActive ? "bg-white text-danger" : "bg-black text-white"
            }`}
          >
            <Icon className="fs-1 text-danger" />
            <br />
            {label}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
