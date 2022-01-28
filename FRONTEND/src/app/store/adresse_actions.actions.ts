import {Adresse} from "../adresse";

export namespace AdresseAction {

  export class Add {
    static readonly type = '[Adresse Store] Add';
    constructor(public payload: Adresse) {}
  }

  export class Remove {
    static readonly type = '[Adresse Store] Remove';
    constructor(public payload: Adresse) {}
  }
}
