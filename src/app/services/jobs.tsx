import { IApply } from "../../interfaces/IApply";
import { ILogin } from "../../interfaces/ILogin";
import { IRegister } from "../../interfaces/IRegister";
import http from "./httpService";

export const allJobs = async () => {
  return await http.get("/job/jobs");
};

export const companyJobs = async (pageNumber: number) => {
  return await http.get(`/jobs/me?pageNumber=${pageNumber}`);
};

export const getRecruiter = async () => {
  const userData = await http.get("/me");
  const user = JSON.stringify(userData);
  localStorage.setItem("recruitnUser", user);
  return userData;
};

export const createJobHR = async (body: any) => {
  return await http.post("/job/create", body);
};

export const getSingleJob = async (id: string) => {
  return await http.get(`/job/${id}`);
};
export const applyJob = async (id: string, data: IApply) => {
  return await http.post(`/job/apply/${id}`, data);
};
export const getJob = async (id: string) => {
  return await http.get(`/job/${id}`);
};

export const closeJob = async (id: string) => {
  return await http.post(`/job/close/${id}`);
};
export const openJob = async (id: string) => {
  return await http.post(`/job/open/${id}`);
};
