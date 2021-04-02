import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrand'
})
export class FilterBrandPipe implements PipeTransform {

  transform(value: Brand[], filterBrands:string): Brand[] {
    filterBrands=filterBrands?filterBrands.toLocaleLowerCase():""
    return filterBrands?value.filter((b:Brand)=>b.brandName.toLocaleLowerCase().indexOf(filterBrands)!==-1):value;
  }

}
