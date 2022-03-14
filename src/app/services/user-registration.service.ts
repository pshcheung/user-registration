import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";

@Injectable()
export class UserRegistrationService {
  constructor(private http: HttpClient) {
  }

  submitRegistration(): Observable<any> {
    return this.http.get(environment.userRegistrationUrl + '/7f434df6-a4ac-4817-ab7c-dd39a564d01d');
  }
}
