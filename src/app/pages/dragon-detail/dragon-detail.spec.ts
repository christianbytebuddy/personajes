import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonDetail } from './dragon-detail';

describe('DragonDetail', () => {
  let component: DragonDetail;
  let fixture: ComponentFixture<DragonDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
