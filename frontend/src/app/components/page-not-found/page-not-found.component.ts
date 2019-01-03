import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  private _error404: string;

  get error404(): string {
    return this._error404;
  }

  set error404(value: string) {
    this._error404 = value;
  }

  constructor() {
    this.error404 = 'error 404: johnny prie pour que ça fonctionne';
  }

  ngOnInit() {
  }

}
