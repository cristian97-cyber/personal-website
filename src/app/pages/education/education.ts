import { NgStyle } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { AppChip } from '../../components/app-chip/app-chip';
import { LayoutService } from '../../services/layout.service';
import { EducationExperienceModel } from '../../model/education-experience.model';
import educationExperiencesData from '../../data/education-experiences.json';
import { EducationCard } from '../../components/education-card/education-card';
import { EducationDetails } from '../../components/education-details/education-details';

@Component({
  selector: 'app-education',
  imports: [NgStyle, AppChip, EducationCard, EducationDetails],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education implements OnInit {
  private readonly layoutService = inject(LayoutService);

  educationExperiences: EducationExperienceModel[] = [];
  selectedEducationExperience: EducationExperienceModel | null = null;

  readonly pageMinHeight = computed(() => {
    return `calc(100vh - ${this.layoutService.mainNavbarHeight()}px)`;
  });

  ngOnInit() {
    this.populateEducationExperiences();
  }

  private populateEducationExperiences() {
    this.educationExperiences = educationExperiencesData.map((exp) => ({
      ...exp,
      startDate: new Date(exp.startDate),
      endDate: exp.endDate ? new Date(exp.endDate) : null,
    }));

    this.selectedEducationExperience = this.educationExperiences[0] ?? null;
  }

  selectEducationExperience(educationExperience: EducationExperienceModel): void {
    this.selectedEducationExperience = educationExperience;
  }

  isSelected(educationExperience: EducationExperienceModel): boolean {
    return this.selectedEducationExperience?.id === educationExperience.id;
  }

  getTabId(educationExperience: EducationExperienceModel): string {
    return `education-tab-${educationExperience.id}`;
  }

  getPanelId(educationExperience: EducationExperienceModel): string {
    return `education-panel-${educationExperience.id}`;
  }

  getBaseGradientClass(index: number): string {
    const gradientClasses = [
      'bg-linear-to-br from-primary to-sky-500',
      'bg-linear-to-br from-secondary to-indigo-500',
    ];

    return gradientClasses[index] ?? gradientClasses[0];
  }
}
