import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {Adresse} from "../../../adresse";
import {AdresseAction} from "../../../store/adresse_actions.actions";
import {AdresseState} from "../../../store/adresse_state";

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  adresses$: Observable<Adresse[]>;
  countAdresses$: Observable<number>;

  constructor(private store: Store) {
    this.countAdresses$ = this.store.select(AdresseState.countAdressesItem);
    this.adresses$ = this.store.select(AdresseState.getAdresses);
  }

  ngOnInit(): void {
  }

  deleteAdresse(adresse: Adresse): void {
    this.store.dispatch(new AdresseAction.Remove(adresse));
  }


}
