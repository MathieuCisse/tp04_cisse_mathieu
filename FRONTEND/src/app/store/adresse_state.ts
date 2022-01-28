import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Adresse} from "../adresse";
import {AdresseStateModel} from "./adresse_state_model";
import {AdresseAction} from "./adresse_actions.actions";


@State<AdresseStateModel>({
  name: 'adresse',
  defaults: {
    adresses: []
  }
})
export class AdresseState {

  @Selector()
  static countAdressesItem(state: AdresseStateModel) {
    return state.adresses.length;
  }

  @Selector()
  static getAdresses(state: AdresseStateModel): Adresse[]{
    return state.adresses;
  }

  @Action(AdresseAction.Add)
  addAdress({getState, patchState}:StateContext<AdresseStateModel>, {payload}: AdresseAction.Add) {
    const state = getState()
    patchState({
      adresses: [...state.adresses, payload]
    })
  }

  @Action(AdresseAction.Remove)
  removeAdress({getState, patchState}:StateContext<AdresseStateModel>, {payload}: AdresseAction.Remove) {
    const state = getState()
    patchState({
      adresses: state.adresses.filter(adresse => adresse != payload)
    })
  }
}
