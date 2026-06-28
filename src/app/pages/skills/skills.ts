import { NgStyle } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { AppCard } from '../../components/app-card/app-card';
import { AppChip } from '../../components/app-chip/app-chip';
import { LayoutService } from '../../services/layout.service';
import technologiesData from '../../data/technologies.json';
import { TechnologySectionModel } from '../../model/technology-section.model';
import { TechnologyIconText } from '../../components/technology-icon-text/technology-icon-text';
import { AppButton } from '../../components/app-button/app-button';
import { ButtonTypeEnum } from '../../enum/button-type.enum';
import { ButtonVariantEnum } from '../../enum/button-variant.enum';
import { ButtonSizeEnum } from '../../enum/button-size.enum';
import { LucideDownload } from '@lucide/angular';

@Component({
  selector: 'app-skills',
  imports: [NgStyle, AppChip, AppCard, TechnologyIconText, AppButton, LucideDownload],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  private readonly layoutService = inject(LayoutService);

  technologiesSections: TechnologySectionModel[] = [];

  ngOnInit() {
    this.populateTechnologiesSections();
  }

  private populateTechnologiesSections() {
    this.technologiesSections = [
      {
        name: 'Front-End',
        icon: 'code-slash',
        type: 'front-end',
        technologies: this.getTechnologiesByType('front-end'),
        bgClass: 'bg-[linear-gradient(135deg,var(--color-sky-600),var(--color-sky-400))]',
      },
      {
        name: 'Back-End',
        icon: 'database',
        type: 'back-end',
        technologies: this.getTechnologiesByType('back-end'),
        bgClass: 'bg-[linear-gradient(135deg,var(--color-fuchsia-600),var(--color-fuchsia-400))]',
      },
      {
        name: 'Language',
        icon: 'braces',
        type: 'language',
        technologies: this.getTechnologiesByType('language'),
        bgClass: 'bg-[linear-gradient(135deg,var(--color-orange-600),var(--color-orange-400))]',
      },
      {
        name: 'Tools & DevOps',
        icon: 'gear',
        type: 'tools',
        technologies: this.getTechnologiesByType('tools'),
        bgClass: 'bg-[linear-gradient(135deg,var(--color-emerald-600),var(--color-emerald-400))]',
      },
    ];
  }

  private getTechnologiesByType(type: string) {
    return technologiesData.filter((technology) => technology.type === type);
  }

  readonly pageMinHeight = computed(() => {
    return `calc(100vh - ${this.layoutService.mainNavbarHeight()}px)`;
  });
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonVariantEnum = ButtonVariantEnum;
  protected readonly ButtonSizeEnum = ButtonSizeEnum;
}
