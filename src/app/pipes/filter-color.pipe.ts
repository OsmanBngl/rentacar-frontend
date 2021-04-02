import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: Color[], filterColors:string): Color[] {
    filterColors=filterColors?filterColors.toLocaleLowerCase():""
    return filterColors?value.filter((c:Color)=>c.colorName.toLocaleLowerCase()
    .indexOf(filterColors)!==-1):value;
  }

}
