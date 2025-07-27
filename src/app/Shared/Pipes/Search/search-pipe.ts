import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../../InterFaces/iproducts';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(array: IProducts[], term: string): any[] {
    return array.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
