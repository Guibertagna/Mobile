import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscaDetailsPage } from './busca-details.page';

describe('BuscaDetailsPage', () => {
  let component: BuscaDetailsPage;
  let fixture: ComponentFixture<BuscaDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscaDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
