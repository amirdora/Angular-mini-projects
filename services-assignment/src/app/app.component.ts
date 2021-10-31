import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActiveUserSerivce } from './active-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ActiveUserSerivce]
})
export class AppComponent implements OnInit {

  activeUsers : string[] = [];
  inactiveUsers : string[] = [];

  constructor(private activeUserService : ActiveUserSerivce){}

  ngOnInit(): void {
    this.activeUsers = this.activeUserService.getActiveUsers();
    this.inactiveUsers = this.activeUserService.getInactiveUsers();
  }

}
