import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";  // CHANGE 1: Add useSelector import

export default function AccountNavigation() {
  const { pathname } = useLocation();
  // CHANGE 2: Get currentUser and determine which links to show
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div className="list-group rounded-0 bg-white text-start w-100" id="wd-account-navigation">
      {/* CHANGE 3: Conditionally render links based on authentication status */}
      {links.includes("Signin") && (
        <Link
          to="/Kambaz/Account/Signin"
          className={`list-group-item border-0 ${
            pathname.includes("Signin") ? "active" : ""
          }`}
        >
          Signin
        </Link>
      )}
      {links.includes("Signup") && (
        <Link
          to="/Kambaz/Account/Signup"
          className={`list-group-item border-0 ${
            pathname.includes("Signup") ? "active text-danger" : ""
          }`}
        >
          Signup
        </Link>
      )}
      {links.includes("Profile") && (
        <Link
          to="/Kambaz/Account/Profile"
          className={`list-group-item border-0 ${
            pathname.includes("Profile") ? "active text-danger" : ""
          }`}
        >
          Profile
        </Link>
      )}
    </div>
  );
}