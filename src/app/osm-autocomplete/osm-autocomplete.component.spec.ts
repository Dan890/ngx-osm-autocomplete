import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmAutocompleteComponent } from './osm-autocomplete.component';

describe('OsmAutocompleteComponent', () => {
  let component: OsmAutocompleteComponent;
  let fixture: ComponentFixture<OsmAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsmAutocompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsmAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
