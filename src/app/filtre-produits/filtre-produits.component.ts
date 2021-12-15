import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filtre-produits',
  templateUrl: './filtre-produits.component.html',
  styleUrls: ['./filtre-produits.component.css']
})
export class FiltreProduitsComponent {

  @Input() filtre: string = "";

  constructor() {}
}
