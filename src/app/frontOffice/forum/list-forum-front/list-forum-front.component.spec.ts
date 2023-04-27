import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForumFrontComponent } from './list-forum-front.component';

describe('ListForumFrontComponent', () => {
  let component: ListForumFrontComponent;
  let fixture: ComponentFixture<ListForumFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListForumFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListForumFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
