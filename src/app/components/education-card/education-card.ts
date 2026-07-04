import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideCalendar, LucideGraduationCap, LucideMapPin } from '@lucide/angular';
import { twMerge } from 'tailwind-merge';
import { EducationExperienceModel } from '../../model/education-experience.model';

@Component({
  selector: 'app-education-card',
  imports: [DatePipe, LucideCalendar, LucideGraduationCap, LucideMapPin],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss',
})
export class EducationCard {
  @Input({ required: true }) educationExperience!: EducationExperienceModel;
  @Input() isActive = false;
  @Input() tabId = '';
  @Input() panelId = '';
  @Input() baseGradientClass = 'bg-linear-to-br from-primary to-secondary';

  @Output() select$ = new EventEmitter<EducationExperienceModel>();

  get cardClass(): string {
    return twMerge(
      'group w-full overflow-hidden rounded-2xl border border-border text-left shadow-lg transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer',
      this.isActive
        ? 'bg-card text-card-foreground shadow-xl shadow-primary/15 opacity-100'
        : 'border-border bg-card/60 text-card-foreground shadow-foreground/5 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card/80 hover:shadow-xl hover:shadow-foreground/10 opacity-30',
    );
  }

  get headerClass(): string {
    return twMerge('block h-20 transition duration-300', this.baseGradientClass);
  }

  get iconClass(): string {
    return twMerge(
      'flex size-12 shrink-0 items-center justify-center rounded-lg text-primary-foreground shadow-lg transition duration-300 shadow-primary/25',
      this.baseGradientClass,
    );
  }

  get metadataClass(): string {
    return twMerge('mt-5 grid gap-3 text-sm text-card-foreground');
  }

  select(): void {
    this.select$.emit(this.educationExperience);
  }
}
