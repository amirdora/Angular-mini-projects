import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() onEventEmit = new EventEmitter<number>();


  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  currentNumber: number = 0
  mySubscription: Subscription = new Subscription;

  constructor() { }

  ngOnInit(): void {
    
  }

  setInterval() {
    this.mySubscription = interval(1000).subscribe((x => {
      this.currentNumber++
      this.generateRandom();
    }));
  }
  
  generateRandom() {
    if(this.currentNumber % 2 === 0){
      this.evenNumbers.push(this.currentNumber)
    } else {
      this.oddNumbers.push(this.currentNumber)
    }
    this.onEventEmit.emit(this.currentNumber)
  }

  pauseInterval() {
    this.mySubscription.unsubscribe()
  }

}
