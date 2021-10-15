import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emittedNumber = 0;
  title = 'componentDataBinding2';


  eventEmitterCatch(value : number){
  this.emittedNumber = value
}
}

