import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideMenu, LucideMoon, LucideSun, LucideX } from '@lucide/angular';
import { ThemeService } from '../../services/theme.service';
import { NavbarItemModel } from '../../model/navbar-item.model';
import { AppButton } from '../app-button/app-button';
import { ButtonTypeEnum } from '../../enum/button-type.enum';
import { ButtonVariantEnum } from '../../enum/button-variant.enum';
import { ButtonSizeEnum } from '../../enum/button-size.enum';
import { AppUrlEnum } from '../../enum/app-url.enum';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-main-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideMenu,
    LucideMoon,
    LucideSun,
    LucideX,
    AppButton,
    NgTemplateOutlet,
  ],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.scss',
})
export class MainNavbar implements OnInit {
  themeService = inject(ThemeService);
  navbarItems: NavbarItemModel[] = [];
  isMobileMenuOpen = false;

  ngOnInit() {
    this.populateNavbarItems();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  private populateNavbarItems(): void {
    this.navbarItems = [
      {
        label: 'Home',
        link: `/${AppUrlEnum.Home}`,
      },
      {
        label: 'Skills',
        link: `/${AppUrlEnum.Skills}`,
      },
      {
        label: 'Experience',
        link: `/${AppUrlEnum.Experience}`,
      },
      {
        label: 'Education',
        link: `/${AppUrlEnum.Education}`,
      },
      {
        label: 'Contact',
        link: `/${AppUrlEnum.Contact}`,
      },
    ];
  }

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonVariantEnum = ButtonVariantEnum;
  protected readonly ButtonSizeEnum = ButtonSizeEnum;
}
