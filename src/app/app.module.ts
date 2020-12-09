import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {MsalModule} from '@azure/msal-angular'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule.forRoot({
      auth:{
        clientId:"bd469597-e556-4b31-aac9-0caf44e48db6", // Application Id of Application registered in B2C
        authority:"https://CenturyLinkB2CTest.b2clogin.com/CenturyLinkB2CTest.onmicrosoft.com/B2C_1A_signup_signin_auth", //signup-signin userflow
        // https://idmgr.b2clogin.com/idmgr.onmicrosoft.com/<policy-name>/oauth2/v2.0/authorize
        //https://jitbox.b2clogin.com/jitbox.onmicrosoft.com/B2C_1_susi", //signup-signin userflow
        validateAuthority:false,
        redirectUri:"http://localhost:4200/"
      },
      cache:{
        cacheLocation:"sessionStorage",
        storeAuthStateInCookie:false
      }
    },{
      consentScopes:[
        "user.read","openid","profile"
      ]
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
