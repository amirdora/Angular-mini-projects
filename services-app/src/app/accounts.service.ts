import { Injectable } from "@angular/core";
import { Account } from "./app.component";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService{

  constructor(private loggingService : LoggingService){}

    accounts: Account[] = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name: string, status: string){
        var account = new Account();
        account.name = name;
        account.status = status;

        this.accounts.push(account)

        this.loggingService.LogStatusChange(status)
      }

      updateStatus(id: number, status: string){
        this.accounts[id].status = status;

        this.loggingService.LogStatusChange(status)
      }
}

