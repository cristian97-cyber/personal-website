import { Component, Input } from '@angular/core';
import { LinkModel } from '../../model/link.model';

@Component({
  selector: 'app-link-icon',
  imports: [],
  templateUrl: './link-icon.html',
  styleUrl: './link-icon.scss',
})
export class LinkIcon {
  @Input({ required: true }) link!: LinkModel;
}
