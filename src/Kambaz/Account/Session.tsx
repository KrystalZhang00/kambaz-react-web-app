import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      // 用户未登录，这是正常的
      console.log("No user logged in");
    }
    setPending(false);
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);
  
  // 只有在检查完成后才渲染子组件
  if (pending) {
    return <div>Loading...</div>; // 可选：显示加载状态
  }
  
  return children;
}