import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilePopupComponent } from './tile-popup.component';

describe('TilePopupComponent', () => {
  let component: TilePopupComponent;
  let fixture: ComponentFixture<TilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
