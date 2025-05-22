import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { pathname } = useLocation();

  return (
    <div className="list-group rounded-0 bg-white text-start w-100" id="wd-account-navigation">
      <Link
        to="/Kambaz/Account/Signin"
        className={`list-group-item border-0 ${
          pathname.includes("Signin") ? "active" : ""
        }`}
      >
        Signin
      </Link>
      <Link
        to="/Kambaz/Account/Signup"
        className={`list-group-item border-0 ${
          pathname.includes("Signup") ? "active text-danger" : ""
        }`}
      >
        Signup
      </Link>
      <Link
        to="/Kambaz/Account/Profile"
        className={`list-group-item border-0 ${
          pathname.includes("Profile") ? "active text-danger" : ""
        }`}
      >
        Profile
      </Link>
    </div>
  );
}
