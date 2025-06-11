import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Button, Form, Alert } from "react-bootstrap";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };

  const updateProfile = async () => {
    try {
      setSuccessMessage("");
      setErrorMessage("");
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
      setSuccessMessage("Profile updated successfully!");
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      setErrorMessage("Failed to update profile. Please try again.");
    }
  };

  // 更新 signout 函数为 async
  const signout = async () => {
    try {
      await client.signout();  // 调用服务器端的 signout
      dispatch(setCurrentUser(null));  // 清除本地状态
      navigate("/Kambaz/Account/Signin");  // 导航到登录页
    } catch (error) {
      console.error("Signout failed:", error);
    }
  };

  useEffect(() => { 
    fetchProfile(); 
  }, []);

  return (
    <div id="wd-profile-screen" className="p-4">
      <h3 className="mb-3">Profile</h3>
      
      {successMessage && (
        <Alert variant="success" className="mb-3" style={{ maxWidth: "400px" }}>
          {successMessage}
        </Alert>
      )}
      
      {errorMessage && (
        <Alert variant="danger" className="mb-3" style={{ maxWidth: "400px" }}>
          {errorMessage}
        </Alert>
      )}
      
      {profile && (
        <Form className="w-100" style={{ maxWidth: "400px" }}>
          {/* ... 其他表单字段保持不变 ... */}
          <Form.Control 
            value={profile.username || ""} 
            id="wd-username"
            placeholder="username" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <Form.Control 
            value={profile.password || ""}
            id="wd-password" 
            type="password" 
            placeholder="password" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <Form.Control 
            value={profile.firstName || ""}
            id="wd-firstname" 
            placeholder="First Name" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <Form.Control 
            value={profile.lastName || ""}
            id="wd-lastname" 
            placeholder="Last Name" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <Form.Control 
            value={profile.dob || ""}
            id="wd-dob" 
            type="date" 
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <Form.Control 
            value={profile.email || ""}
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
            onClick={updateProfile}
            className="w-100 mb-2" 
            variant="primary"
            id="wd-update-btn"
          >
            Update
          </Button>
          
          <Button 
            onClick={signout}
            className="w-100 wd-signout-btn"  // 添加教材要求的 class
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