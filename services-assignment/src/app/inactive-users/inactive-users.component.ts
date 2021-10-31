import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActiveUserSerivce } from '../active-user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[] = [];

  constructor(private activeUserService : ActiveUserSerivce){}

  onSetToActive(id: number) {
    this.activeUserService.SetToActive(id)
  }
}
