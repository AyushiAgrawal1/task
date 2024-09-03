import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  parentPrimitiveData: string= 'Initial primitive data'
  childData: string= 'Initial Child Data'


  constructor() { }

}
