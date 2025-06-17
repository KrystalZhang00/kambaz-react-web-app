import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";  // CHANGE 1: Add useSelector import
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import Users from "./Users";

export default function Account() {
  // CHANGE 2: Get currentUser to determine default route
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="d-flex" id="wd-account-screen">
      <div className="me-4" style={{ minWidth: "160px" }}>
        <AccountNavigation />
      </div>
      <div className="flex-fill">
        <Routes>
          {/* CHANGE 3: Navigate to Profile if signed in, Signin if not */}
          <Route 
            path="/" 
            element={
              <Navigate to={
                currentUser 
                  ? "/Kambaz/Account/Profile" 
                  : "/Kambaz/Account/Signin"
              }/>
            } 
          />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Users/:uid" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}