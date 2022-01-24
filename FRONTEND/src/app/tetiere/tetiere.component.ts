import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PanierState} from "../store_panier/panier.state";
import {Select} from "@ngxs/store";

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Select(PanierState.countPanierItem) countPanierItem$ : Observable<number> = new Observable<number>();

}
