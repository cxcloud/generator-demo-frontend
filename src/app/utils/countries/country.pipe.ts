import { Pipe, PipeTransform } from '@angular/core';
import { getCountryName } from './countries';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {
  transform(value: string): string {
    return getCountryName(value);
  }
}
