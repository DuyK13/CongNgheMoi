import { Observable } from 'rxjs';
import { ModalService } from './../_modal/modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from './../service/account/account.service';
import { FormGroup, FormControl } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title = 'Trang chủ';

  user = {
    name: 'Trần Thế Duy',
    phoneNumber: '0798455595',
    birthday: '20/08/1999',
    gender: 'Nam',
  };

  passwordForm = new FormGroup({
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    rewritePassWord: new FormControl(''),
  });
  userForm = new FormGroup({
    userNameInfo: new FormControl(''),
    userPhoneNumberInfo: new FormControl(''),
    userBirthdayInfo: new FormControl(''),
    userGenderInfo: new FormControl(''),
  });

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    // this.getUserInfo();
  }

  /**
   * getUserInfo
   */
  public getUserInfo() {
    this.userForm.controls.userNameInfo.setValue(this.user.name);
    this.userForm.controls.userPhoneNumberInfo.setValue(this.user.phoneNumber);
    this.userForm.controls.userBirthdayInfo.setValue(this.user.birthday);
    this.userForm.controls.userGenderInfo.setValue(this.user.gender);
  }

  /**
   * onSubmitPassword
   */
  public onSubmitPassword() {
    console.log(this.passwordForm.value);
  }

  /**
   * onUpdateInfo
   */
  public onUpdateInfo() {
    console.log(this.userForm.value);
  }

  /**
   * resetForm
   */
  public resetForm() {
    this.passwordForm.reset();
    this.userForm.reset();
  }
}
