import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActiveUserSerivce } from '../active-user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[] = [];

  constructor(private activeUserService : ActiveUserSerivce){}

  onSetToInactive(id: number) {
    this.activeUserService.SetToInactive(id)
  }
}
