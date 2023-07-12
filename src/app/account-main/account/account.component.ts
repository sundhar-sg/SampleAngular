import { Component, Input } from '@angular/core';
import { LoggingService } from 'src/app/account-main/shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

    constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
        this.accountsService.statusUpdated.subscribe(
            (status) => alert("New Status: " +status)
        );
    }

    @Input() account: {name: string, status: string} = {name: '', status: ''};
    @Input() id: number = 0;
    
    onSetTo(status: string) {
        this.accountsService.updateStatus(this.id, status);
        // this.loggingService.logStatusChange(status);
        this.accountsService.statusUpdated.emit(status);
    }

}