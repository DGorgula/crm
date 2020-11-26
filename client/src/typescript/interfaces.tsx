export interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  idNumber: string;
  email: string;
  phone: string;
  Class: IClass;
  address: string;
  age: number;
  maritalStatus: string;
  children: number;
  academicBackground: string;
  militaryService: string;
  workExperience: string;
  languages: string;
  citizenship: string;
  additionalDetails: string;
  Events: IEvent[];
}
export interface ICompany {
  id?: number;
  name: string;
  contactName: string;
  contactNumber: string;
  contactEmail: string;
  location: string;
  ScaleUpContact: string;
  jobs: Pick<IJob, "id">;
}
export interface IJob {
  id?: number;
  company: string;
  position: string;
  requirements: string;
  location: string;
  description: string;
  contact: string;
  additionalDetails: string;
  Events: IEvent[];
}

export interface IClass {
  id: number;
  course: string;
  name: string;
  startingDate: string;
  endingDate: string;
  cycleNumber: number;
  zoomLink: string;
  additionalDetails: string;
  Students: Omit<IStudent, "Class">[];
}

export interface IEvent {
  status: string;
  comment: string;
  date: string;
  Student?: IStudent;
  Job?: IJob;
}
