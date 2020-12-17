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
  mentorId: number | null;
  mentor?: IMentor | null;
  Events: IEvent[];
  resumeLink?: string;
  fccAccount?: string;
}

export interface IJob {
  id?: number;
  Company: ICompany;
  position: string;
  requirements: string;
  location: string;
  description: string;
  contact: string;
  additionalDetails: string;
  Events: IEvent[];
}

export interface IClass {
  id?: number;
  course: string;
  name: string;
  startingDate: string;
  endingDate: string;
  cycleNumber: number;
  zoomLink: string;
  additionalDetails: string;
  Students: Omit<IStudent, "Class">[];
}

export interface ICompany {
  id?: number;
  name: string;
  contactPosition?: string;
  contactName?: string;
  contactNumber?: string;
  location: string;
  description?: string;
  Jobs: IJob[];
}

export type status =
  | "Sent CV"
  | "Phone Interview"
  | "First interview"
  | "Second interview"
  | "Third Interview"
  | "Forth interview"
  | "Home Test"
  | "Hired"
  | "Rejected"
  | "Irrelevant"
  | "Removed Application"
  | "Position Frozen"
  | "Canceled";

export interface IEvent {
  id?: number;
  eventName: status;
  userId?: number;
  relatedId?: number;
  entry?: { [key: string]: any };
  date: string;
  Student?: IStudent;
  Job?: IJob;
}

type filterOptions = "Class" | "Course" | "JobStatus" | "Name";

export interface filterStudentObject {
  Class: string[];
  Course: string[];
  JobStatus: string[];
  Name: string[];
}
export interface Name {
  firstName: string;
  lastName: string;
}

export interface SelectInputs {
  filterBy: string;
  possibleValues: string[];
}

export interface IMentor {
  id?: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  job: string;
  available: boolean;
  gender: string;
  Students?: Partial<IStudent>[];
  Meetings?: Partial<IMeeting>[];
}

export interface MentorClassDashboard {
  id?: number;
  firstName: string;
  lastName: string;
  Class: Partial<IClass>;
  Mentor: IMentor;
  Meetings: Partial<IMeeting>[];
}

export interface IMeeting {
  id?: number;
  date: string;
  mentorId: number;
  studentId: number;
  place: string;
}
export interface IUser {
  id?: number;
  userType: string;
  firstName?: string;
  lastName?: string;
  idNumber?: string;
  email?: string;
  phone?: string;
  Class?: IClass;
  address?: string;
  age?: number;
  maritalStatus?: string;
  children?: number;
  academicBackground?: string;
  militaryService?: string;
  workExperience?: string;
  languages?: string;
  citizenship?: string;
  additionalDetails?: string;
  Events?: IEvent[];
}

export interface IUserSignIn {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface INotice {
  id?: number;
  classId: number;
  type: "regular" | "important" | "critical";
  body: string;
  createdBy: number;
}

export interface ILesson {
  id?: number;
  classId: number;
  title: string;
  body: string;
  resource?: string;
  zoomLink?: string;
  createdBy: number;
}

export interface ITask {
  id?: number;
  lessonId?: number;
  externalId?: number;
  externalLink?: string;
  createdBy: number;
  endDate: Date;
  type: string;
  status: "active" | "disabled";
  body?: string;
}

export type ThemeType = "dark" | "light";
