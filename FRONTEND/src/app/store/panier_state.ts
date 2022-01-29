import {Action, Selector, State, StateContext} from "@ngxs/store";
import {PanierAction} from "./panier_actions.actions";
import {PanierStateModel} from "./panier_state_model";
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
    const state = getState();
    if(state.produits.find(produit => produit.id == payload.id)) {
      patchState({
        produits: state.produits.map(produit => produit.id == payload.id ? {...produit, quantite: produit.quantite + 1} : produit)
      })
    }
    else {
      patchState({
        produits: [...state.produits, { ...payload, quantite: 1}]
      })
    }
    console.log(state.produits)
  }

  @Action(PanierAction.Remove)
  removeItemToPanier({getState, patchState}:StateContext<PanierStateModel>, {payload}: PanierAction.Remove) {
    const state = getState();
    let produitASupprimer: Produit | undefined = state.produits.find(produit => produit.id == payload.id);
    if(produitASupprimer && produitASupprimer.quantite > 1) {
      patchState({
        produits: state.produits.map(produit => produit.id == payload.id ? {...produit, quantite: produit.quantite - 1} : produit)
      })
    }
    else {
      patchState({
        produits: state.produits.filter(produit => produit.id != payload.id)
      })
    }
  }
}


