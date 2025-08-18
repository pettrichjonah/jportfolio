import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedimageComponent } from './protectedimage.component';

describe('ProtectedimageComponent', () => {
  let component: ProtectedimageComponent;
  let fixture: ComponentFixture<ProtectedimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
