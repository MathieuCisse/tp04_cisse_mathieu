import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Adresse} from "../../adresse";
import {Store} from "@ngxs/store";
import {AdresseAction} from "../../store/adresse_actions.actions";

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent {

  formIsValid: boolean = false; //si le formulaire est valide lors du submit
  adresse: string = "";         //adresse de l'utilisateur
  cp: string = "";              //code postal de l'utilisateur
  ville: string = "";           //ville de l'utilisateur
  pays: string = "";            //pays de l'utilisateur

  /**
   * Constructeur
   */
  constructor(private store: Store) {}

  /**
   * Fonction appelé à la validation du formulaire
   * Modification de l'attribut formIsValid si le formulaire est valide
   * Si le formulaire est valide alors le ngIf dans le template laissera passer les données au composant récapitulatif
   * @param registerForm
   */
  sendToRecap(registerForm: NgForm) {
    this.formIsValid = registerForm.valid ?? false;
    if (this.formIsValid) {

      let adresse: Adresse = {
        adresse: this.adresse,
        cp: this.cp,
        ville: this.ville,
        pays: this.pays,
      }

      this.store.dispatch(new AdresseAction.Add(adresse));

      registerForm.reset();
    }
  }


}

