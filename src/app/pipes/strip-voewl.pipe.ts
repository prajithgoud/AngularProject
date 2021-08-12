import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripVoewl'
})
export class StripVoewlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
