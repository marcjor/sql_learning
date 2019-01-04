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
  private _difficulty1: string;
  private _difficulty2: string;
  private _difficulty3: string;
  private _difficulty4: string;

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

  get difficulty1(): string {
    return this._difficulty1;
  }

  set difficulty1(value: string) {
    this._difficulty1 = value;
  }

  get difficulty2(): string {
    return this._difficulty2;
  }

  set difficulty2(value: string) {
    this._difficulty2 = value;
  }

  get difficulty3(): string {
    return this._difficulty3;
  }

  set difficulty3(value: string) {
    this._difficulty3 = value;
  }

  get difficulty4(): string {
    return this._difficulty4;
  }

  set difficulty4(value: string) {
    this._difficulty4 = value;
  }

  constructor() {
    this._mainTitle = 'sql learning';
    this._slogan = "Le meilleur moyen d'apprendre MySQL";
    this._mainBtn = 'get started';
    this._difficulty1 = 'facile';
    this._difficulty2 = 'medium';
    this._difficulty3 = 'difficile';
    this._difficulty4 = 'expert';
  }

  ngOnInit() {
  }

}
