import {api} from './api.js';

export class Popup{
  constructor(popupElement){
    this.popupElement = popupElement;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.popupElement.closest('.root').querySelector('.popup__close').addEventListener('click', this.close);


  }
  open(){
    this.popupElement.classList.add('popup_is-opened');

  }
  close(){
    this.popupElement.classList.remove('popup_is-opened');
    form.reset();
    addCardButton.classList.remove('popup__button_active');
  }
  applyImage(event){
 
    let popup = document.createElement('div');
    popup.classList.add('popup');

    let popupContent = document.createElement('div');
    popupContent.classList.add('popup__image');
   
              
    let popupImage = document.createElement('img');
    popupImage.classList.add('popup__image-background');
    popupImage.style.backgroundImage = event;
          
    let popupClose = document.createElement('img');
    popupClose.setAttribute('src', "./images/close.svg");
    popupClose.classList.add('popup__close');

              
    popupContent.appendChild(popupImage);
    popupContent.appendChild(popupClose);
    popup.appendChild(popupContent);            
    document.body.appendChild(popup);

    popup.classList.add('popup_is-opened');
    //закрытие попап с картинкой
    popupClose.addEventListener('click', function(){
    popup.classList.remove('popup_is-opened');

  });
  
  }
}


