import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponentComponent } from './pokemon-list-component.component';

describe('PokemonListComponentComponent', () => {
  let component: PokemonListComponentComponent;
  let fixture: ComponentFixture<PokemonListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListComponentComponent]
    });
    fixture = TestBed.createComponent(PokemonListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
