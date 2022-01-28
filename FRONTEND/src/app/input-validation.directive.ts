import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputValidation]'
})
export class InputValidationDirective {

  element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  /**
   * Modification du background de l'input s'il est valide ou pas
   */
  @HostListener('input', ['$event']) validityInput(){
    this.element.nativeElement.style.backgroundColor = this.element.nativeElement.checkValidity() ? "" : "red";
  }
}
