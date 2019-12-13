import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSidenavContentComponent } from './ng-sidenav-content.component';

describe('NgSidenavContentComponent', () => {
  let component: NgSidenavContentComponent;
  let fixture: ComponentFixture<NgSidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
