import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PanierState} from "../store_panier/panier.state";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {

  countPanierItem$: Observable<number>;

  constructor(private store: Store) {
    this.countPanierItem$ = this.store.select(PanierState.countPanierItem);
  }

  ngOnInit(): void {}
}
