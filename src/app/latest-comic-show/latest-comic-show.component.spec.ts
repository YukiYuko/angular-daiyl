import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestComicShowComponent } from './latest-comic-show.component';

describe('LatestComicShowComponent', () => {
  let component: LatestComicShowComponent;
  let fixture: ComponentFixture<LatestComicShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestComicShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestComicShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
