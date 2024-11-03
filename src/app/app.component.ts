import { Component } from '@angular/core';
import { OsmAutocompleteComponent } from './osm-autocomplete/osm-autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OsmAutocompleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-osm-autocomplete';
}
