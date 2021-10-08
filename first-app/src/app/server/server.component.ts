import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .customPara { 
    background-color: blue;
    color: white;
    padding: 5px;
   }
  `]
})
export class ServerComponent implements OnInit {

  stringList = ["secret password = tuna"]
  constructor() { }

  ngOnInit(): void {
  }

  addParagraph(){
    this.stringList.push("secret password = tuna " + formatDate(Date.now(),'yyyy-MM-dd HH:mm:ss','en-US'));
  }
}
