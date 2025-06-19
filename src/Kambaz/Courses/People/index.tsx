import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "./Table";
import * as courseClient from "../client";

export default function People() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const fetchEnrolledUsers = async () => {
      if (!cid) return;
      
      try {
        setLoading(true);
        const enrolledUsers = await courseClient.findUsersForCourse(cid);
        setUsers(enrolledUsers);
      } catch (error) {
        console.error("Error fetching enrolled users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledUsers();
  }, [cid]);

  if (loading) {
    return <div>Loading enrolled users...</div>;
  }

  return <PeopleTable users={users} />;
} 