import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmecontentComponent } from './aboutmecontent.component';

describe('AboutmecontentComponent', () => {
  let component: AboutmecontentComponent;
  let fixture: ComponentFixture<AboutmecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutmecontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutmecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
