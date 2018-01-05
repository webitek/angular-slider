import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

/*@Pipe({
  name: 'localizedCurrency'
})
export class LocalizedCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}*/
const map = {
  RUB: 'ru-RU',
  UAH: 'ua-UA'
};
/**
 * default CurrencyPipe in Angular work
 * only with EUR and USD
 *
 */
@Pipe({name: 'localizedCurrency'})
export class LocalizedCurrencyPipe implements PipeTransform {
  public transform(value: any, currencyCode: string = 'USD',
                   symbolDisplay: boolean = false, digits: string = null): string {
    return new CurrencyPipe(map[currencyCode])
      .transform(value, currencyCode, symbolDisplay, digits);
  }
}