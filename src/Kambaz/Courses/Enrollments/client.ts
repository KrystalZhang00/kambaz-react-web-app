import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${ENROLLMENTS_API}/${courseId}`
  );
  return response.data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/${courseId}`
  );
  return response.data;
};

export const getMyEnrollments = async () => {
  const response = await axiosWithCredentials.get(ENROLLMENTS_API);
  return response.data;
};

export const checkEnrollment = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${ENROLLMENTS_API}/${courseId}`
  );
  return response.data.enrolled;
};