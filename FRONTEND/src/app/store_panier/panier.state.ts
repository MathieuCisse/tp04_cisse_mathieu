import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Panier} from "./panier.actions";
import {PanierStateModel} from "../panierstatemodel";
import {Injectable} from "@angular/core";
import {Produit} from "../produit";

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    produits: []
  }
})
@Injectable()
export class PanierState {

  @Selector()
  static countPanierItem(state: PanierStateModel) {
    return state.produits.length;
  }

  @Selector()
  static getProduit(state: PanierStateModel): Produit[]{
    return state.produits;
  }

  @Action(Panier.Add)
  addItemToPanier({getState, patchState}:StateContext<PanierStateModel>, {payload}: Panier.Add) {
    const state = getState()
    patchState({
      produits: [...state.produits, payload]
    })
  }

  @Action(Panier.Remove)
  removeItemToPanier({getState, patchState}:StateContext<PanierStateModel>, {payload}: Panier.Remove) {
    const state = getState()
    patchState({
      produits: state.produits.filter(produit => produit != payload)
    })
  }
}
