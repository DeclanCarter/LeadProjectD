import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
import { Observable, from } from 'rxjs';
import { Constants } from 'msal';
import { AppConstants } from '../appconstants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken: string;
  // tslint:disable-next-line: align
  headerOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};

  funcAuthHttpOptions: {
      'grant_type': 'client_credentials',
      'client_id': '7b135f96-6600-4802-9887-8bd2473de3a6',
      'client_secret': 'Fpqyn4N_Wfz8j5If0.r~N-z_.it8KM9KjK',
      'resource': 'https://leadgenerationfnappv3.azurewebsites.net'
  };

  constructor(private httpClient: HttpClient) { }

  getProfile(): Observable<any> {
    return from(this.httpClient.get(AppConstants.GRAPH_ENDPOINT).toPromise());
  }

  getFuncAccessToken() {
    // tslint:disable-next-line: max-line-length
    const body = 'grant_type=client_credentials&client_id=7b135f96-6600-4802-9887-8bd2473de3a6&client_secret=Fpqyn4N_Wfz8j5If0.r~N-z_.it8KM9KjK&resource=https://leadgenerationfnappv3.azurewebsites.net';    

    // tslint:disable-next-line: max-line-length
    return this.httpClient.post<any>(AppConstants.FUNCTION_AUTH_ENDPOINT, body, this.headerOptions).toPromise().then(token =>
      {
        console.log(token);
        this.accessToken = token.access_token;
        return this.accessToken;
      });
  }
}
