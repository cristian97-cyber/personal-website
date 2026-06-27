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
import { TechnologyIcon } from '../../components/technology-icon/technology-icon';
import { LinkModel } from '../../model/link.model';
import linksData from '../../data/links.json';
import { LinkIcon } from '../../components/link-icon/link-icon';
import { HeightBreakpointsConst } from '../../const/height-breakpoints.const';
import { AppUrlEnum } from '../../enum/app-url.enum';

@Component({
  selector: 'app-home',
  imports: [AppButton, LucideArrowRight, LucideFileDown, NgStyle, TechnologyIcon, LinkIcon],
  templateUrl: 'home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  layoutService = inject(LayoutService);
  technologies: TechnologyModel[] = [];
  links: LinkModel[] = [];

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
  }

  private populateTechnologies() {
    this.technologies = technologiesData;
  }

  private populateLinks() {
    this.links = linksData;
  }

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonVariantEnum = ButtonVariantEnum;
  protected readonly ButtonSizeEnum = ButtonSizeEnum;
  protected readonly AppUrlEnum = AppUrlEnum;
}
