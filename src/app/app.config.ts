import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { DEFAULT_OSM_CONFIG } from './osm-autocomplete/osm-autocomplete.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: 'OSM_CONFIG',
      useValue: {
        ...DEFAULT_OSM_CONFIG,
        // here we can override the default config
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
