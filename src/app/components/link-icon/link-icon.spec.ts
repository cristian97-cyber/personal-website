import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIcon } from './link-icon';

describe('LinkIcon', () => {
  let component: LinkIcon;
  let fixture: ComponentFixture<LinkIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
