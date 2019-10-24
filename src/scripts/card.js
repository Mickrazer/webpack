import {api} from './api.js';
export class Card {
  constructor(name, link){
  this.cardElement = this.create(name, link);
  this.cardElement.querySelector('.place-card__like-icon').addEventListener('click', this.like);
  this.cardElement.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
  this.cardElement.querySelector('.place-card__image').addEventListener('click', function(event){
    if(event.target.matches('.place-card__image')){
      popupImage.applyImage(event.target.style.backgroundImage);
    }
  });

  }
    create (nameValue, linkValue) {

    let iconDelete = document.createElement('button');
    iconDelete.classList.add('place-card__delete-icon');


    let cardDescription = document.createElement('div');
    cardDescription.classList.add('place-card__description');

    let iconLike = document.createElement('button');
    iconLike.classList.add('place-card__like-icon');

    let cardsContainer = document.createElement('div');
    cardsContainer.classList.add('place-card');

    let cardName = document.createElement('h3');
    cardName.classList.add('place-card__name');    
    cardName.textContent = nameValue;
        

    let cardImage = document.createElement('div');
    cardImage.classList.add('place-card__image');
    cardImage.style.backgroundImage = `url(${linkValue})`;


    cardImage.appendChild(iconDelete);
    cardsContainer.appendChild(cardImage);
    cardsContainer.appendChild(cardDescription);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(iconLike);
    
    return cardsContainer;

  }
  // добавление лайка (метод like)
  like(event){
    event.target.classList.toggle('place-card__like-icon_liked');

  }
  remove(){
    placesList.removeChild(this.parentElement.parentElement);
  }

}



