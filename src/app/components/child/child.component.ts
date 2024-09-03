import { Component, computed, Input } from '@angular/core';
import { StringifyDirective } from "../../pipes/stringify/stringify.directive";
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [StringifyDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() sharedData:any
  childData:string = ""

  constructor(private commonService:CommonService){}
  ngOnInit(){
    this.childData = this.commonService.childData
  }


  changeChildData(){
    this.childData = "Updated Child Data"
  }

}
