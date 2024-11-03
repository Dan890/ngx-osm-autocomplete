// src/app/osm-autocomplete/osm-autocomplete.component.ts
import { Component } from '@angular/core';
import { OsmAutocompleteService } from './osm-autocomplete.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-osm-autocomplete',
  templateUrl: './osm-autocomplete.component.html',
  styleUrls: ['./osm-autocomplete.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [OsmAutocompleteService],
})
export class OsmAutocompleteComponent {
  query = '';
  results: any[] = [];

  constructor(private osmService: OsmAutocompleteService) {}

  onSearch() {
    if (this.query.length > 2) {
      this.osmService.search(this.query).subscribe((data) => {
        this.results = data;
      });
    } else {
      this.results = [];
    }
  }

  selectResult(result: any) {
    this.query = result.display_name;
    this.results = [];
    // Additional logic for handling the selected location, e.g., showing it on a map
  }
}
