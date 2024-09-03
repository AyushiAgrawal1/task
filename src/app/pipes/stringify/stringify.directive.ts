import { Pipe } from '@angular/core';

@Pipe({
  name: 'stringify',
  standalone: true
})
export class StringifyDirective {

  constructor() { }


  // transform object and return string
  transform(obj:Object):string{
    console.log('%c [ obj ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', obj)
   return JSON.stringify(obj)
  }

}
