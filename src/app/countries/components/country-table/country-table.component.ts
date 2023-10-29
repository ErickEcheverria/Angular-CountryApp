import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'contries-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      img {
        width: 25px
      }
    `
  ]
})
export class CountryTableComponent {
  @Input()
  public contries: Country[] = [];
}
