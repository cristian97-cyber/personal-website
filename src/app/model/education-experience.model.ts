export interface EducationExperienceModel {
  id: number;
  courseTitle: string;
  universityName: string;
  startDate: Date;
  endDate: Date | null;
  location: string;
  numberOfExams: number;
  degree: string;
  numberOfProjects: number;
  thesis: ThesisModel;
  focusAreas: string[];
  relevantCourses: CourseModel[];
}

export interface ThesisModel {
  title: string;
  description: string;
}

export interface CourseModel {
  name: string;
  content: string;
}
