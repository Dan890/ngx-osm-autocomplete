import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {
  OsmAutocompleteConfig,
  DEFAULT_OSM_CONFIG,
  AddressFieldConfig,
} from './osm-autocomplete.config';

@Injectable({
  providedIn: 'root',
})
export class OsmAutocompleteService {
  private config: OsmAutocompleteConfig;

  constructor(
    private http: HttpClient,
    @Inject('OSM_CONFIG') private userConfig: Partial<OsmAutocompleteConfig>
  ) {
    this.config = { ...DEFAULT_OSM_CONFIG, ...userConfig };
  }

  search(query: string, addressType?: string[]): Observable<any> {
    const params: any = {
      q: query,
      format: this.config.format,
      addressdetails: this.config.addressdetails,
      limit: this.config.limit,
    };

    if (addressType && addressType.length > 0) {
      params['addresstype'] = addressType.join(',');
    } else if (this.config.defaultAddressTypes.length > 0) {
      params['addresstype'] = this.config.defaultAddressTypes.join(',');
    }

    return this.http
      .get<any[]>(this.config.nominatimUrl, { params })
      .pipe(map((results) => this.formatResults(results)));
  }

  private formatResults(results: any[]): any[] {
    return results.map((result) => {
      if (this.config.resultDisplay.useDisplayName) {
        return { ...result, formattedAddress: result.display_name };
      } else if (this.config.resultDisplay.customFormat) {
        return {
          ...result,
          formattedAddress: this.config.resultDisplay.customFormat(result),
        };
      } else {
        return {
          ...result,
          formattedAddress: this.formatAddress(result.address),
        };
      }
    });
  }

  private formatAddress(address: any): string {
    const fields = this.config.resultDisplay.addressFields;
    const parts: string[] = [];

    if (fields.street && (address.road || address.street)) {
      parts.push(address.road || address.street);
    }
    if (fields.houseNumber && address.house_number) {
      parts.push(address.house_number);
    }
    if (fields.city && (address.city || address.town || address.village)) {
      parts.push(address.city || address.town || address.village);
    }
    if (fields.state && address.state) {
      parts.push(address.state);
    }
    if (fields.country && address.country) {
      parts.push(address.country);
    }
    if (fields.postcode && address.postcode) {
      parts.push(address.postcode);
    }

    return parts.join(', ');
  }
}
