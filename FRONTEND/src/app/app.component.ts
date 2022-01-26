import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {PanierState} from "./store_panier/panier.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "tp4";
  countPanierItem$: Observable<number>;

  constructor(private store: Store) {
    this.countPanierItem$ = this.store.select(PanierState.countPanierItem);
  }
}
