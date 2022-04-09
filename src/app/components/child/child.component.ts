import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() msgp = new EventEmitter<string>();


  @Input() parentMessage:any;
  @Input() parentMsg2:any;
  childMessage= "child to parent message using @viewChild";
  childMsg2="hello this is child msg2 to parent";

  msgO(){
    this.msgp.emit("hello new output from child");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
function parentMessage(parentMessage: any, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

