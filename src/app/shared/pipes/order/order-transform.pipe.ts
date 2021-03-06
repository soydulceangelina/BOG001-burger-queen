import { Pipe, PipeTransform } from '@angular/core';
import {Order} from '../../../core/models/order.model';
import {TotalService} from '../../../core/services/total/total.service';

@Pipe({
  name: 'orderTransform'
})
export class OrderTransformPipe implements PipeTransform {

  prducts: Order[];

  constructor(
    private totalService: TotalService
  ){}

  transform(value: any, arg?: any): any {
    let total = 0;
    this.totalService.total$.subscribe(products => {
      products.forEach((element) => {
        if (element.id === value.id) {
          total += 1;
        }
      });
    });
    return total;
  }

}
