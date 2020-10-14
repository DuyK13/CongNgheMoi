import { Router } from '@angular/router';
import { ServerHttpService } from './../service/serviceApi/server-http.service';
import { ModalService } from './../_modal/modal.service';
import { Component, Input, OnInit, NgModule } from '@angular/core';
import { AccountService } from './../service/account/account.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

interface User {
  id: string;
  name: string;
  phoneNumber: string;
  birthday: Date;
  gender: string;
  password: string;
  userName: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User;

  passwordForm = this.formBuilder.group({
    currentPassword: ['', [Validators.required]],
    newPassword: [
      '',
      [
        Validators.required,
        // Validators.pattern(
        //   '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
        // ),
      ],
    ],
    rewritePassWord: [
      '',
      [
        Validators.required,
        // Validators.pattern(
        //   '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
        // ),
      ],
    ],
  });
  userForm;

  constructor(
    public modalService: ModalService,
    private formBuilder: FormBuilder,
    private serverHttp: ServerHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.serverHttp.getProfile().subscribe((data) => {
      this.user = {
        id: data.id,
        name: data.name,
        phoneNumber: data.phoneNumber,
        birthday: data.birthday,
        gender: data.gender,
        password: data.password,
        userName: data.userName,
      };

      sessionStorage.setItem('userId', this.user.id);
    });
  }
  /**
   * onSubmitPassword
   */
  public onSubmitPassword() {
    if (
      this.passwordForm.controls.currentPassword.value !==
        this.passwordForm.controls.newPassword.value &&
      this.passwordForm.controls.rewritePassWord.value ===
        this.passwordForm.controls.newPassword.value
    ) {
      this.user.password = this.passwordForm.controls.newPassword.value;
      this.serverHttp.changePassword(this.user).subscribe((data) => {
        this.modalService.close('modalChangePassword');
        alert('no navigate ???');
      });
    } else if (
      this.passwordForm.controls.newPassword.value !==
      this.passwordForm.controls.rewritePassWord.value
    ) {
      alert('Mật khẩu xác nhận không trùng');
      this.passwordForm.reset();
    } else if (
      this.passwordForm.controls.currentPassword.value ===
      this.passwordForm.controls.newPassword.value
    ) {
      alert('Mật khẩu mới bị trùng');
      this.passwordForm.reset();
    }
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
  }

  /**
   * resetUserForm
   */
  public resetUserForm() {
    this.userForm = this.formBuilder.group({
      userNameInfo: [
        this.user.name,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      userPhoneNumberInfo: [
        this.user.phoneNumber,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('0[1-9][0-9]{8}'),
        ],
      ],
      userBirthdayInfo: [new Date(this.user.birthday), [Validators.required]],
      userGenderInfo: [this.user.gender, [Validators.required]],
    });
  }
}
