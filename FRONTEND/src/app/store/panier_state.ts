import {Action, Selector, State, StateContext} from "@ngxs/store";
import {PanierAction} from "./panier_actions.actions";
import {PanierStateModel} from "./panier_state_model";
import {Injectable} from "@angular/core";
import {Produit} from "../produit";

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    produits: []
  }
})
export class PanierState {

  @Selector()
  static countPanierItem(state: PanierStateModel) {
    return state.produits.length;
  }

  @Selector()
  static getProduit(state: PanierStateModel): Produit[]{
    return state.produits;
  }

  @Action(PanierAction.Add)
  addItemToPanier({getState, patchState}:StateContext<PanierStateModel>, {payload}: PanierAction.Add) {
    const state = getState()
    patchState({
      produits: [...state.produits, payload]
    })
  }

  @Action(PanierAction.Remove)
  removeItemToPanier({getState, patchState}:StateContext<PanierStateModel>, {payload}: PanierAction.Remove) {
    const state = getState()
    patchState({
      produits: state.produits.filter(produit => produit != payload)
    })
  }
}


