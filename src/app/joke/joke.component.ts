import { Component,OnInit,Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
box: any;
  constructor(private http:HttpClient){ 
    
  }
  @Input() data=0;
  ngOnInit():void{
    HttpClient
  }
  fetchData(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(data=>{
      console.log(data);
      
    })
  }

   display:number=0;
  CallData(val:string){

    val=="plus"? this.display++:this.display--;
    
  }

  disable=false;
  btnClk(){
    this.disable=!this.disable;
  }
  // color:string="red";

  // arr=['hi','hello','hola','bonjour']
  users=[
    {name:'ABC',phone:'12234'},
    {name:'DEF',phone:'23542'},
    {name:'GHI',phone:'76432'},
    {name:'JKL',phone:'64213'},
  ]
  color:string='red';
}
