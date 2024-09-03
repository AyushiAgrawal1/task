import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StringifyDirective } from "../../pipes/stringify/stringify.directive";
import { ChildComponent } from "../child/child.component";
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [StringifyDirective, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {

  primitiveData:string=""
  nonPrimitiveData: {name:string} = {name:'Initial name'}
  parentData:string = "Hello From Parent 👋"

  constructor(private commonService:CommonService){}
  ngOnInit(){
    this.primitiveData = this.commonService.parentPrimitiveData
  }

  changePrimitiveData(){
    this.primitiveData = "Updated primitive data"
  }

  changeNonPrimitiveData(){
    this.nonPrimitiveData = {name:'Updated name'}
    console.log(this.nonPrimitiveData)
  }


}
