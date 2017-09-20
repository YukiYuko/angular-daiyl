import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastMessComponent } from './fast-mess.component';

describe('FastMessComponent', () => {
  let component: FastMessComponent;
  let fixture: ComponentFixture<FastMessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastMessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
