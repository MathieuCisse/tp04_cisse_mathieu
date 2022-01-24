import {Produit} from "../produit";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Panier} from "./panier.actions";

export interface PanierStateModel {
  produits: [];
}

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    produits: []
  }
})
export class PanierState {
  @Selector()
  static countPanierItem(panierStateModel: PanierStateModel) {
    return panierStateModel.produits.length;
  }

  @Action(Panier.Add)
  addItemToPanier(ctx: StateContext<PanierStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      produits: state.produits
    });
  }

  @Action(Panier.Remove)
  removeItemToPanier(ctx: StateContext<PanierStateModel>, produitToRemove : Produit) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      produits: state.produits.filter(produit => produit != produitToRemove)
    });
  }
}
