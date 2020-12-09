import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Lumen Channel Partner';

  constructor(private authService:MsalService, private http:HttpClient){}

  onApiCall(){
    console.log('Api call');
    this.authService
    .acquireTokenSilent({
      scopes: ['https://CenturyLinkB2CTest.onmicrosoft.com/api/read_data'],
    })
    .then((result: any) => {
      console.log(result);
      this.http
        .get(API_ENDPOINT, {
          responseType: 'text',
          headers: new HttpHeaders({
            'Authorization':'Bearer '+ result.accessToken
          })
        })
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.log(error)
        );
    });
  }
}