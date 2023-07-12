import { Component, OnInit } from '@angular/core';
import { AccountsService } from './shared/accounts.service';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.css']
})
export class AccountMainComponent implements OnInit {

    accounts: {name: string, status: string}[] = [];

    constructor(private accountsService: AccountsService) {}

    ngOnInit(): void {
        this.accounts = this.accountsService.accounts;
    }
}