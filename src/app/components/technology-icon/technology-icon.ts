import { Component, Input } from '@angular/core';
import { TechnologyModel } from '../../model/technology.model';

@Component({
  selector: 'app-technology-icon',
  imports: [],
  templateUrl: './technology-icon.html',
  styleUrl: './technology-icon.scss',
})
export class TechnologyIcon {
  @Input({ required: true }) technology!: TechnologyModel;
}
