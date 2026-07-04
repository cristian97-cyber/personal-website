import { Component, Input } from '@angular/core';
import {
  LucideBookOpenCheck,
  LucideFolderKanban,
  LucideSparkles,
  LucideScrollText,
  LucideTrophy,
} from '@lucide/angular';
import { EducationExperienceModel } from '../../model/education-experience.model';
import { AppChip } from '../app-chip/app-chip';

@Component({
  selector: 'app-education-details',
  imports: [
    AppChip,
    LucideBookOpenCheck,
    LucideFolderKanban,
    LucideScrollText,
    LucideSparkles,
    LucideTrophy,
  ],
  templateUrl: './education-details.html',
  styleUrl: './education-details.scss',
})
export class EducationDetails {
  @Input({ required: true }) educationExperience!: EducationExperienceModel;
}
