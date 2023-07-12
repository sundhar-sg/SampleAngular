import { Component } from '@angular/core';
import { LoggingService } from 'src/app/account-main/shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

    constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountsService.addAccount(accountName, accountStatus);
        // this.loggingService.logStatusChange(accountStatus);
    }
}
