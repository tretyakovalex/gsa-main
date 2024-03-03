import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHeroComponent } from './services-hero.component';

describe('ServicesHeroComponent', () => {
  let component: ServicesHeroComponent;
  let fixture: ComponentFixture<ServicesHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesHeroComponent]
    });
    fixture = TestBed.createComponent(ServicesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
