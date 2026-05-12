import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rated_moviesPage } from './rated_movies.page';

describe('Rated_moviesPage', () => {
  let component: Rated_moviesPage;
  let fixture: ComponentFixture<Rated_moviesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Rated_moviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
