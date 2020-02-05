// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoginComponent } from './login/login.component';

const config = {
  issuer: 'https://dev-938772.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/protected',
  clientId: '0oa19mis1Ikn6IFPL4x6',
  pkce: true
}

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  console.log("onAuthRequiredLaunched");
}

const appRoutes: Routes = [
  {
    path: 'callback/implicit',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
   {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ OktaAuthGuard ],
    data: {
      onAuthRequired
    }
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config)
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
