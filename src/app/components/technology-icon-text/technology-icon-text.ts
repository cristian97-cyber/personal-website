import { Component, Input } from '@angular/core';
import { TechnologyModel } from '../../model/technology.model';

@Component({
  selector: 'app-technology-icon-text',
  imports: [],
  templateUrl: './technology-icon-text.html',
  styleUrl: './technology-icon-text.scss',
})
export class TechnologyIconText {
  @Input({ required: true }) technology!: TechnologyModel;
}
