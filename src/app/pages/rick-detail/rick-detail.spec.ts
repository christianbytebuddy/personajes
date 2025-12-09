import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickDetail } from './rick-detail';

describe('RickDetail', () => {
  let component: RickDetail;
  let fixture: ComponentFixture<RickDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
