import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EasyService {

  private _url = 'http://localhost:4040';

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  constructor(private http: HttpClient) { }

  public getPersonnes() {
    return this.http.get(`${this._url}/easy`);
  }
}
