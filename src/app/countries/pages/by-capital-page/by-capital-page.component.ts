import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  searchByCapital(term: string): void {
    this.countriesServices.searchByCapital(term)
      .subscribe(contunries => {
        this.countries = contunries;
      });
  };

  constructor(private countriesServices: CountriesService) { }
}
