export interface IApply {
  email: string;
  yearsOfExperience: number | undefined;
  firstName: string;
  lastName: string;
  resume: IResume;
}


export interface IResume {
  url: string
}