import { ILogin } from "../../interfaces/ILogin";
import { IRegister } from "../../interfaces/IRegister";
import http from "./httpService";


export const signUp = async (data: IRegister) => {
  const res:any = await http.post("/register", data);
  res && setToken(res.data.token)
  return res
};

export const login = async (data: ILogin) => {
  const res: any = await http.post("/login", data);
  setToken(res.data.token);
  return res
};

export const setToken = async (token: string) => {
  localStorage.setItem("recruitnToken", token);
};

export const getToken = () => {
  const token = localStorage.getItem("recruitnToken");
  return token
};

export const logOut = () => {
  localStorage.clear()
  window.location.reload()
}
