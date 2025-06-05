import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Button, Form } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };

  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  useEffect(() => { 
    fetchProfile(); 
  }, []);

  return (
    <div id="wd-profile-screen" className="p-4">
      <h3 className="mb-3">Profile</h3>
      {profile && (
        <Form className="w-100" style={{ maxWidth: "400px" }}>
          <Form.Control 
            defaultValue={profile.username} 
            id="wd-username"
            placeholder="username" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <Form.Control 
            defaultValue={profile.password}
            id="wd-password" 
            type="password" 
            placeholder="password" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <Form.Control 
            defaultValue={profile.firstName}
            id="wd-firstname" 
            placeholder="First Name" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <Form.Control 
            defaultValue={profile.lastName}
            id="wd-lastname" 
            placeholder="Last Name" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <Form.Control 
            defaultValue={profile.dob}
            id="wd-dob" 
            type="date" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <Form.Control 
            defaultValue={profile.email}
            id="wd-email" 
            type="email" 
            placeholder="Email" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <Form.Select 
            value={profile.role || "USER"}
            id="wd-role"
            className="mb-3"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
          <Button 
            onClick={signout}
            className="w-100" 
            variant="danger"
            id="wd-signout-btn"
          >
            Sign out
          </Button>
        </Form>
      )}
    </div>
  );
}