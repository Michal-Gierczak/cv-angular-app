import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsItemComponent } from './awards-item.component';

describe('AwardsItemComponent', () => {
  let component: AwardsItemComponent;
  let fixture: ComponentFixture<AwardsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
