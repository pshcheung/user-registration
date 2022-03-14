import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<any> {
    return this.http.get(environment.userRegistrationUrl + '/611a3036-4420-48a5-b8da-9b461853cdd2');
  }
}
