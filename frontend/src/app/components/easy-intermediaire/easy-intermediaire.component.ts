import {Component, OnInit} from '@angular/core';
import {Easy} from "../easy/easy";
import {EasyService} from "../easy/easy.service";

@Component({
  selector: 'app-easy-intermediaire',
  templateUrl: './easy-intermediaire.component.html',
  styleUrls: ['./easy-intermediaire.component.css']
})
export class EasyIntermediaireComponent implements OnInit {

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
