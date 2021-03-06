import {Produit} from "../produit";

export namespace PanierAction {

  export class Add {
    static readonly type = '[Panier Store] Add';
    constructor(public payload: Produit) {}
  }

  export class Remove {
    static readonly type = '[Panier Store] Remove';
    constructor(public payload: Produit) {}
  }

}
