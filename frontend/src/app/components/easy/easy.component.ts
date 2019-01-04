import { Component, OnInit } from '@angular/core';
import {Easy} from "./easy";
import {EasyService} from "./easy.service";

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.css']
})
export class EasyComponent implements OnInit {

  private _personnes: Easy[];

  get personnes(): Easy[] {
    return this._personnes;
  }

  set personnes(value: Easy[]) {
    this._personnes = value;
  }

  private _select: string;
  private _star: string;
  private _from: string;
  private _table: string;

  get select(): string {
    return this._select;
  }

  set select(value: string) {
    this._select = value;
  }

  get star(): string {
    return this._star;
  }

  set star(value: string) {
    this._star = value;
  }

  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get table(): string {
    return this._table;
  }

  set table(value: string) {
    this._table = value;
  }

  constructor(private easyservice: EasyService) {
    this._select = 'SELECT';
    this._star = '*';
    this._from = 'FROM';
    this._table = 'personnes';
  }

  ngOnInit() {
    this.fetchEasy()
  }

  fetchEasy() {
    this.easyservice.getPersonnes().subscribe((data: Easy[]) => {
      this._personnes = data;
      console.log('Data requested:');
      console.log(this._personnes);
    });
  }

  public checkSQL(): void {

  }
}
