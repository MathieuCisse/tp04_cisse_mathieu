import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {PanierState} from "./store/panier_state";
import {AdresseState} from "./store/adresse_state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "tp4";
  countPanierItem$: Observable<number>;
  countAdresse$: Observable<number>

  constructor(private store: Store) {
    this.countPanierItem$ = this.store.select(PanierState.countPanierItem);
    this.countAdresse$ = this.store.select(AdresseState.countAdressesItem);
  }
}
