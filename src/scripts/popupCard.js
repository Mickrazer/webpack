import {api} from './api.js';
import {Popup} from './popup.js';


export class PopupCard extends Popup{
  constructor(popupElement, button){
    super(popupElement);
    this.button = button;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.popupElement.closest('.root').querySelector('.popup__close').addEventListener('click', this.close);
    this.button.addEventListener('click', this.open);
  }
}