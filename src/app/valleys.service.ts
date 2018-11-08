import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ValleysService {
  private headers: HttpHeaders;
  // tslint:disable-next-line:no-inferrable-types
  private accessPointUrl: string = 'https://localhost:44339/api/valleys';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    // Get all valleys data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
  }
}
