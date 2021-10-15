import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

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
    console.log(this.currentNumber)
  }

  pauseInterval() {
    this.mySubscription.unsubscribe()
  }

}
