import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class PipeCustomPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.toLocaleUpperCase(); 
  }

}
