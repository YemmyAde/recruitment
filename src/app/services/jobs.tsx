import { IApply } from "../../interfaces/IApply";
import { ILogin } from "../../interfaces/ILogin";
import { IRegister } from "../../interfaces/IRegister";
import http from "./httpService";


export const allJobs = async() => {
   return await http.get('/job/jobs')
}

export const companyJobs = async (id:string) => {
  return await http.get(`/job/me/${id}`);
};

export const getRecruiter = async () => {
  return await http.get("/me");
};

export const applyJob = async (id:string, data:IApply) => {
  return await http.post(`/job/apply/${id}`, data);
};
export const getJob = async (id: string) => {
  return await http.get(`/job/${id}`);
};