import { AuthenticationService } from '../service/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../service/account/account';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {
  private account = new Account();

  constructor(
    private route: Router,
    private loginService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  checkLogin() {}
}
