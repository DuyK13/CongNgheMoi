import { AccountService } from './../service/account/account.service';
import { Account } from './../service/account/account';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {}

  get AccountName() {
    return this.form.get('accountName');
  }

  get Phone() {
    return this.form.get('phone');
  }

  get Password() {
    return this.form.get('password');
  }

  get ConfirmPassword() {
    return this.form.get('confirmPassword');
  }
  private account = new Account();

  form = new FormGroup({
    accountName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  AdminForm(AdminInformation) {
    let pass = this.Password.value;
    let confirmPass = this.ConfirmPassword.value;

    if (pass == confirmPass) {
      this.account.accountName = this.AccountName.value;
      this.account.phone = this.Phone.value;
      this.account.password = this.Password.value;
      this.account.confirmPassword = this.ConfirmPassword.value;

      this.accountService.save(this.account).subscribe(
        (response) => {
          let result = response.json();

          if (result > 0) {
            this.router.navigate(['/login']);
          } else {
            alert(
              'error occur while registring User. please try after sometime.'
            );
          }
        },
        (error) => {
          alert(
            'error occur while registring User. please try after sometime.'
          );
        }
      );
    } else {
      alert('Password and confirm password not match.');
    }
  }
}
