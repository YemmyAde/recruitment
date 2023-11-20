import { IRegister } from "../../interfaces/IRegister";

export const validateRegister = (data: IRegister) => {
  let error;

  if (!data.email) {
    return (error = "Email is required");
  } else if (!data.email.match(emailRegex)) {
    return (error = "Kindly provide a valid email");
  } else if (!data.password) {
    return (error = "Password is required");
  }

  return error;
};

export const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
