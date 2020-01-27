import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateItemComponent } from './project-create-item.component';

describe('ProjectCreateItemComponent', () => {
  let component: ProjectCreateItemComponent;
  let fixture: ComponentFixture<ProjectCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
