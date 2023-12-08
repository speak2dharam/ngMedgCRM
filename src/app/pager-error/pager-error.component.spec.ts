import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerErrorComponent } from './pager-error.component';

describe('PagerErrorComponent', () => {
  let component: PagerErrorComponent;
  let fixture: ComponentFixture<PagerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagerErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
