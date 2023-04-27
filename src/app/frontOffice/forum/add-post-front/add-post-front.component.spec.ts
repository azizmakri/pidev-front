import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostFrontComponent } from './add-post-front.component';

describe('AddPostFrontComponent', () => {
  let component: AddPostFrontComponent;
  let fixture: ComponentFixture<AddPostFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPostFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
