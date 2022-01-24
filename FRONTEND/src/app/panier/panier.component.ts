import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
