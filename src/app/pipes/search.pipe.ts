import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let data = value;
    let searchInput = args[0];
    console.log(data, searchInput);
    let output = data.filter(
      (input) =>
        input.fname.includes(searchInput) ||
        input.mname.includes(searchInput) ||
        input.lname.includes(searchInput)
    );
    return output;
  }
}
