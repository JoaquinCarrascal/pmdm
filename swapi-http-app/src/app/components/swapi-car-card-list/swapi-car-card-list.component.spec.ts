import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiCarCardListComponent } from './swapi-car-card-list.component';

describe('SwapiCarCardListComponent', () => {
  let component: SwapiCarCardListComponent;
  let fixture: ComponentFixture<SwapiCarCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapiCarCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapiCarCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
