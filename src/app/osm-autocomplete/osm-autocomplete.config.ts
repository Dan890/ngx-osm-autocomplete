export interface AddressFieldConfig {
  street: boolean;
  houseNumber: boolean;
  city: boolean;
  state: boolean;
  country: boolean;
  postcode: boolean;
}

export interface ResultDisplayConfig {
  useDisplayName: boolean;
  customFormat?: (result: any) => string;
  addressFields: AddressFieldConfig;
}

export interface OsmAutocompleteConfig {
  nominatimUrl: string;
  format: string;
  addressdetails: string;
  limit: string;
  defaultAddressTypes: string[];
  resultDisplay: ResultDisplayConfig;
}

export const DEFAULT_OSM_CONFIG: OsmAutocompleteConfig = {
  nominatimUrl: 'https://nominatim.openstreetmap.org/search',
  format: 'json',
  addressdetails: '1',
  limit: '5',
  defaultAddressTypes: ['road', 'street'],
  resultDisplay: {
    useDisplayName: false,
    addressFields: {
      street: true,
      houseNumber: true,
      city: true,
      state: true,
      country: true,
      postcode: true,
    },
  },
};
