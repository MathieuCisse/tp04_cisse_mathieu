import {Produit} from "../produit";

export namespace Panier {

  export class Add {
    static readonly type = '[Panier Store] Add';
    constructor(public produit: Produit) {}
  }

  export class Remove {
    static readonly type = '[Panier Store] Remove';
    constructor(public produit: Produit) {}
  }

}
