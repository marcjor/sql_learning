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

  constructor(private easyservice: EasyService) { }

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
}
