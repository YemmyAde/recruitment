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