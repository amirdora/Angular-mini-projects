import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountService : AccountsService ){}
  
  onCreateAccount(accountName: string, accountStatus: string) {
    
    this.accountService.addAccount(accountName, accountStatus)
  }
}
