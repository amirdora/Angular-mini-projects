import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Account } from '../app.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: Account = new Account;
  @Input() id: number = 0;
 
  constructor(private accountService : AccountsService ){}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
  }
}
