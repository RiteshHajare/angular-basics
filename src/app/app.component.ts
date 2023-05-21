import { Component } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector:"app-root",
  templateUrl:"./app.component.html",
  styleUrls:['./app.component.css']
})
export class AppComponent {
    users:Array<User>=[
      {name:"ABC", age:21 ,salary:230000},
      {name:"XYZ", age:22 ,salary:150000},
      {name:"MNOp", age:23 ,salary:220000}
    ]

    recievedData(e:any){
      console.log(e);
      
    }

    parenttochild=10;
}
