import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filtre-produits',
  templateUrl: './filtre-produits.component.html',
  styleUrls: ['./filtre-produits.component.css']
})
export class FiltreProduitsComponent {

  filtre: string = "";
  @Output() changeFiltreValeur : EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngModelFiltreChange(): void {
    this.changeFiltreValeur.emit(this.filtre);
  }
}
