import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { SignInComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListFriendComponent } from './list-friend/list-friend.component';
import { Router, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MessageComponent } from './message/message.component';
import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    SignInComponent,
    DashboardComponent,
    ListFriendComponent,
    SignupComponent,
    MessageComponent,
  ],
  imports: [
    ModalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: SignInComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent, SignInComponent],
})
export class AppModule {}
