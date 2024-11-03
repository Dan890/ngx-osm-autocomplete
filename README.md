# ngx-osm-autocomplete

ngx-osm-autocomplete is an Angular 18+ standalone component for implementing OpenStreetMap (OSM) autocomplete functionality using Nominatim API. It allows users to search for locations with autocomplete suggestions from OpenStreetMap data.

## Features

- Autocomplete search powered by OpenStreetMap Nominatim API
- Standalone Angular 18+ component
- Easy to integrate and use
- Minimal dependencies

## Installation

To install the component, use npm:

```
npm install ngx-osm-autocomplete
```

## Usage

Follow these steps to use ngx-osm-autocomplete in your Angular project.

1. Import the Component
   To use the OsmAutocompleteComponent, first import it into your Angular component.

```
import { Component } from '@angular/core';
import { OsmAutocompleteComponent } from 'ngx-osm-autocomplete';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OsmAutocompleteComponent],
  template: `
    <h1>Location Search</h1>
    <app-osm-autocomplete></app-osm-autocomplete>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
```

2. Configure the Component
   The component comes with a default configuration (DEFAULT_OSM_CONFIG) that can be customized using ApplicationConfig.

**Configuration Options**

**limit:** Specifies the maximum number of results to return. (Default: '5')

**defaultAddressTypes:** Array of address types to prioritize in the results. (Default: ['road', 'city'])

**resultDisplay:** Customize the display of results with options for using display names or specific address fields.

**useDisplayName:** If true, the entire display name from OSM will be shown. If false, the individual address fields will be used. (Default: true)

**addressFields:** An object that defines which fields to display in the result. Options include:

- street: Display the street name (true or false)
- houseNumber: Display the house number (true or false)
- city: Display the city (true or false)
- state: Display the state (true or false)
- country: Display the country (true or false)
- postcode: Display the postcode (true or false)
  Example Configuration
  In the above example configuration:

The limit of results is set to 10.
The default address types to display are road, street, and house.
For result display, the component will show individual address fields (street, house number, city, and country), while omitting the state and postcode.

Here's how you can provide custom configuration options:

```
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { DEFAULT_OSM_CONFIG } from 'ngx-osm-autocomplete';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: 'OSM_CONFIG',
      useValue: {
        ...DEFAULT_OSM_CONFIG,
        // Custom configuration overriding default options
        limit: '10',
        defaultAddressTypes: ['road', 'street', 'house'],
        resultDisplay: {
          useDisplayName: false,
          addressFields: {
            street: true,
            houseNumber: true,
            city: true,
            state: false,
            country: true,
            postcode: false,
          },
        },
      },
    },
  ],
};
```

3. Run Your Application
   Once you have integrated the component, you can run your Angular project:

```
ng serve
```

## Example

Here is a simple usage of ngx-osm-autocomplete:

```
<app-osm-autocomplete></app-osm-autocomplete>
```

### Output

A text input for location search, with autocomplete suggestions displayed in a dropdown list.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
