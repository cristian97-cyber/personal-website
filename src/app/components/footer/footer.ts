import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppLogo } from '../app-logo/app-logo';
import { LinkIcon } from '../link-icon/link-icon';
import { NavbarItemModel } from '../../model/navbar-item.model';
import { LinkModel } from '../../model/link.model';
import { AppUrlEnum } from '../../enum/app-url.enum';
import linksData from '../../data/links.json';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, AppLogo, LinkIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  navbarItems: NavbarItemModel[] = [];
  links: LinkModel[] = [];

  get year() {
    return new Date().getFullYear();
  }

  ngOnInit(): void {
    this.populateNavbarItems();
    this.populateLinks();
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

  private populateLinks(): void {
    this.links = linksData;
  }
}
