import { Component, inject, OnInit } from '@angular/core';
import { LucideArrowRight, LucideFileDown, LucideMail } from '@lucide/angular';
import { AppButton } from '../../components/app-button/app-button';
import { ButtonSizeEnum } from '../../enum/button-size.enum';
import { ButtonTypeEnum } from '../../enum/button-type.enum';
import { ButtonVariantEnum } from '../../enum/button-variant.enum';
import { LayoutService } from '../../services/layout.service';
import { NgStyle } from '@angular/common';
import { TechnologyModel } from '../../model/technology.model';
import technologiesData from '../../data/technologies.json';
import { LinkModel } from '../../model/link.model';
import linksData from '../../data/links.json';
import { LinkIcon } from '../../components/link-icon/link-icon';
import { HeightBreakpointsConst } from '../../const/height-breakpoints.const';
import { AppUrlEnum } from '../../enum/app-url.enum';
import { TypewriterText } from '../../components/typewriter-text/typewriter-text';
import { TechnologyCarousel } from '../../components/technology-carousel/technology-carousel';

@Component({
  selector: 'app-home',
  imports: [
    AppButton,
    LucideArrowRight,
    LucideFileDown,
    NgStyle,
    LinkIcon,
    TypewriterText,
    TechnologyCarousel,
  ],
  templateUrl: 'home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  layoutService = inject(LayoutService);
  technologies: TechnologyModel[] = [];
  links: LinkModel[] = [];
  taglineTexts: string[] = [];

  get pageHeight() {
    if (this.layoutService.windowHeight() >= HeightBreakpointsConst.Lg) {
      return `calc(100vh - ${this.layoutService.mainNavbarHeight()}px)`;
    } else {
      return 'auto';
    }
  }

  get pageMinHeight() {
    return `calc(100vh - ${this.layoutService.mainNavbarHeight()}px)`;
  }

  ngOnInit() {
    this.populateTechnologies();
    this.populateLinks();
    this.populateTaglineTexts();
  }

  private populateTechnologies() {
    this.technologies = technologiesData;
  }

  private populateLinks() {
    this.links = linksData;
  }

  private populateTaglineTexts() {
    this.taglineTexts = [
      'Building high-performance, scalable software solutions',
      `${this.getYearsOfExperience()}+ years of experience in implementing high-complex systems`,
      'Passionate about new technologies and clean code',
    ];
  }

  private getYearsOfExperience() {
    const today = new Date();
    const start = new Date('2022-09-05');
    let years = today.getFullYear() - start.getFullYear();

    const currentMonth = today.getMonth();
    const startMonth = start.getMonth();
    const currentDay = today.getDate();
    const startDay = start.getDate();
    if (currentMonth < startMonth || (currentMonth === startMonth && currentDay < startDay)) {
      years--;
    }

    return years;
  }

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonVariantEnum = ButtonVariantEnum;
  protected readonly ButtonSizeEnum = ButtonSizeEnum;
  protected readonly AppUrlEnum = AppUrlEnum;
}
