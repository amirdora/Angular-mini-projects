import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  currentValue: number[] = [];
  randomNumber: number = 0
  mySubscription: Subscription = new Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  setInterval() {
    this.mySubscription = interval(1000).subscribe((x => {
      this.generateRandom();
    }));
  }
  
  generateRandom() {
    this.randomNumber = Math.ceil(this.getRandomArbitrary(0, 2))
    this.currentValue.push(this.randomNumber)
    console.log(this.randomNumber)
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  pauseInterval() {
    this.mySubscription.unsubscribe()
  }

}
