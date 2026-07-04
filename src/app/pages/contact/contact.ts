import { NgStyle } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { AppChip } from '../../components/app-chip/app-chip';
import { LinkIcon } from '../../components/link-icon/link-icon';
import linksData from '../../data/links.json';
import { LinkModel } from '../../model/link.model';
import { LayoutService } from '../../services/layout.service';
import { LucideBriefcase, LucideMail, LucideMapPin } from '@lucide/angular';

@Component({
  selector: 'app-contact',
  imports: [NgStyle, AppChip, LinkIcon, LucideBriefcase, LucideMail, LucideMapPin],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private readonly layoutService = inject(LayoutService);

  links: LinkModel[] = [];

  readonly pageMinHeight = computed(() => {
    return `calc(100vh - ${this.layoutService.mainNavbarHeight()}px)`;
  });

  get emailLink() {
    return this.links.find((l) => l.name === 'Email');
  }

  get emailAddress() {
    return this.emailLink?.url.replace('mailto:', '') ?? '';
  }

  ngOnInit() {
    this.populateLinks();
  }

  private populateLinks() {
    this.links = linksData;
  }
}
