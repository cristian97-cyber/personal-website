export interface WorkExperienceModel {
  id: number;
  position: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  typology: 'part-time' | 'full-time';
  location: string;
  skills: string[];
  technologies: string[];
}
