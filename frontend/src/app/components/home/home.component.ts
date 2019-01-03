import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _mainTitle: string;
  private _slogan: string;
  private _mainBtn: string;

  get mainTitle(): string {
    return this._mainTitle;
  }

  set mainTitle(value: string) {
    this._mainTitle = value;
  }

  get slogan(): string {
    return this._slogan;
  }

  set slogan(value: string) {
    this._slogan = value;
  }

  get mainBtn(): string {
    return this._mainBtn;
  }

  set mainBtn(value: string) {
    this._mainBtn = value;
  }

  constructor() {
    this._mainTitle = 'sql learning';
    this._slogan = "Le meilleur moyen d'apprendre MySQL";
    this._mainBtn = 'get started';
  }

  ngOnInit() {
  }

}
