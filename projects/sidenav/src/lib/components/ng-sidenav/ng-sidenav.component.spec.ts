import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSidenavComponent } from './ng-sidenav.component';

describe('NgSidenavComponent', () => {
  let component: NgSidenavComponent;
  let fixture: ComponentFixture<NgSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
