import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideBriefcase, LucideMapPin } from '@lucide/angular';
import { AppChip } from '../app-chip/app-chip';
import { WorkExperienceModel } from '../../model/work-experience.model';

@Component({
  selector: 'app-experience-card',
  imports: [DatePipe, AppChip, LucideBriefcase, LucideMapPin],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  @Input({ required: true }) experience!: WorkExperienceModel;

  get typologyLabel(): string {
    return this.experience.typology === 'full-time' ? 'Full-time' : 'Part-time';
  }

  get typologyClass(): string {
    const baseClass = 'px-3 py-1 text-xs leading-none';

    if (this.experience.typology === 'full-time') {
      return `${baseClass} border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400`;
    }

    return `${baseClass} border-orange-500/25 bg-orange-500/10 text-orange-600 dark:text-orange-400`;
  }
}
