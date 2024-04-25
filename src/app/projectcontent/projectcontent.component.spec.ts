import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcontentComponent } from './projectcontent.component';

describe('ProjectcontentComponent', () => {
  let component: ProjectcontentComponent;
  let fixture: ComponentFixture<ProjectcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectcontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
