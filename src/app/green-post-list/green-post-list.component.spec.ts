import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenPostListComponent } from './green-post-list.component';

describe('GreenPostListComponent', () => {
  let component: GreenPostListComponent;
  let fixture: ComponentFixture<GreenPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenPostListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
