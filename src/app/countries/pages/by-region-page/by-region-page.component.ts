import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  searchByRegion(term: string): void {
    this.countriesServices.searchRegion(term)
      .subscribe(contunries => {
        this.countries = contunries;
      });
  };
  constructor(private countriesServices: CountriesService) { }
}
