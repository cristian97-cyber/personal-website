import { NgStyle } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { LucideDownload } from '@lucide/angular';
import { AppChip } from '../../components/app-chip/app-chip';
import { ExperienceCard } from '../../components/experience-card/experience-card';
import { LayoutService } from '../../services/layout.service';
import { WorkExperienceModel } from '../../model/work-experience.model';
import workExperiencesData from '../../data/work-experiences.json';

@Component({
  selector: 'app-experience',
  imports: [NgStyle, AppChip, ExperienceCard, LucideDownload],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements OnInit {
  private readonly layoutService = inject(LayoutService);

  experiences: WorkExperienceModel[] = [];

  readonly pageMinHeight = computed(() => {
    return `calc(100vh - ${this.layoutService.mainNavbarHeight()}px)`;
  });

  ngOnInit() {
    this.populateExperience();
  }

  private populateExperience(): void {
    this.experiences = workExperiencesData.map((exp) => ({
      ...exp,
      startDate: new Date(exp.startDate),
      endDate: exp.endDate ? new Date(exp.endDate) : null,
      typology: exp.typology as 'full-time' | 'part-time',
    }));
  }
}
