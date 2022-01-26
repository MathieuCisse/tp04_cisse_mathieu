import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../environments/environment";
import {Produit} from "./produit";
import {Observable} from "rxjs";

@Injectable()
export class ProduitService {

  constructor(private httpClient : HttpClient) { }

  public getProduits() : Observable<Produit[]> {
    // construction d'un observable afin que le composant appelant cette méthode puisse subscribre cette observateur
    return this.httpClient.get<Produit[]>(environment.baseUrl);
  }

}
