import { AccountService } from './../service/account/account.service';
import { Component, OnInit } from '@angular/core';
import { Account } from '../service/account/account';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  accounts: Account[];
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  private getAccounts() {
    this.accountService.getAccountsList().subscribe((data) => {
      this.accounts = data;
    });
  }
}
