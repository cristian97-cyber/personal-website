import { TechnologyModel } from './technology.model';

export interface TechnologySectionModel {
  name: string;
  icon: string;
  type: string;
  technologies: TechnologyModel[];
  bgClass: string;
}
