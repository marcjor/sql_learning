import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-easy-intermediaire',
  templateUrl: './easy-intermediaire.component.html',
  styleUrls: ['./easy-intermediaire.component.css']
})
export class EasyIntermediaireComponent implements OnInit {
  @ViewChild('openModal') openModal: ElementRef;

  constructor() { }

  ngOnInit() {
    this.openModal.nativeElement.click();
  }

}
