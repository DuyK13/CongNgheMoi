import { Observable } from 'rxjs';
import { ModalService } from './../_modal/modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from './../service/account/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
