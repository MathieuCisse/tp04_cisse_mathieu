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
  nom: string = "";             //nom de l'utilisateur
  prenom: string = "";          //prenom de l'utilisateur
  adresse: string = "";         //adresse de l'utilisateur
  cp: string = "";              //code postal de l'utilisateur
  ville: string = "";           //ville de l'utilisateur
  pays: string = "";            //pays de l'utilisateur
  telephone: string = "";       //téléphone de l'utilisateur
  email: string = "";           //email de l'utilisateur
  civilite: string = "";        //civilitéé de l'utilisateur

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
        nom: this.nom,
        prenom: this.prenom,
        adresse: this.adresse,
        cp: this.cp,
        ville: this.ville,
        pays: this.pays,
        telephone: this.telephone,
        email: this.email,
        civilite: this.civilite
      }

      this.store.dispatch(new AdresseAction.Add(adresse));

      registerForm.reset();
    }
  }


}

