import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocontentComponent } from './photocontent.component';

describe('PhotocontentComponent', () => {
  let component: PhotocontentComponent;
  let fixture: ComponentFixture<PhotocontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotocontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotocontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
