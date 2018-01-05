import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term, filterBy): any {
    return term
        ? items.filter((item) => item[filterBy].toLowerCase().indexOf(term.toLowerCase()) !== -1)
        : items;
  }
}

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(items: any[], sortedBy: string): any {
    // console.log('sortedBy', sortedBy);
    // console.log('items', items);

    return items.sort((a, b) => {
      return b[sortedBy] - a[sortedBy];
    });
  }
}