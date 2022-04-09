import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild(ChildComponent)child:any;
  childMessage!:string;
  childMsg2!:string;

  interval!:any;

  title:String="sahan dias";
  message:String | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log("hello");
  }
  ngAfterViewInit(){
    this.childMessage = this.child.childMessage;
    this.childMsg2 = this.child.childMsg2;
  }
 
  getMin = (a:number,b:number) => {
    if(a<b){
      return a;
    }else{
      return b;
    }
  }
  receveO (msgt:any){
    alert(msgt);
  }
}
