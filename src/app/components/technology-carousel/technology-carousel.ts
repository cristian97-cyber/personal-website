import { Component, Input } from '@angular/core';
import { TechnologyModel } from '../../model/technology.model';
import { TechnologyIcon } from '../technology-icon/technology-icon';

@Component({
  selector: 'app-technology-carousel',
  imports: [TechnologyIcon],
  templateUrl: './technology-carousel.html',
  styleUrl: './technology-carousel.scss',
})
export class TechnologyCarousel {
  @Input({ required: true }) technologies: TechnologyModel[] = [];
}
