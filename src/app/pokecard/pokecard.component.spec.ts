import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardComponent } from './pokecard.component';

describe('PokecardComponent', () => {
  let component: PokecardComponent;
  let fixture: ComponentFixture<PokecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokecardComponent]
    });
    fixture = TestBed.createComponent(PokecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
