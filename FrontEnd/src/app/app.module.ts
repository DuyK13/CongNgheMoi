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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './service/authentication/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: 'AIzaSyDPg5EBhX6qkYwrZwIRy7W_-uITG7swL1U',
  authDomain: 'congnghemoi-12496.firebaseapp.com',
  databaseURL: 'https://congnghemoi-12496.firebaseio.com',
  projectId: 'congnghemoi-12496',
  storageBucket: 'congnghemoi-12496.appspot.com',
  messagingSenderId: '828088726078',
  appId: '1:828088726078:web:f579ccb5daa642d56c176f',
  measurementId: 'G-QNHK72ZP86',
};

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    SignInComponent,
    DashboardComponent,
    ListFriendComponent,
    SignupComponent,
    MessageComponent,
    // LoginComponent,
    // RegisterComponent,
    // ForgotPasswordComponent,
    // VerifyEmailComponent,
    // AdminComponent,
    // LogoutComponent,
    // LoginComponent,
    // RegisterComponent,
    // VerifyEmailComponent,
    // ForgotPasswordComponent,
  ],
  imports: [
    ModalModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
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
  providers: [AuthenticationService],
  bootstrap: [AppComponent, SignInComponent],
})
export class AppModule {}
