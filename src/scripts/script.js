import {api} from './api.js';
import {Card} from './card.js';
import {Popup} from './popup.js';
import {CardList} from './cardList.js';
import {PopupEdit} from './popupEdit.js';
import {PopupCard} from './popupCard.js';


const initialCards = [];
const infoButton = document.querySelector('.user-info__button');
const placesList = document.querySelector('.places-list');
const editButton = document.querySelector('.edit__button');
const editPopup = document.getElementById('editPopup');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job'); 
const avatar = document.querySelector('.user-info__photo');
const form = document.forms.new;
const name = form.elements.name;
const link = form.elements.link;

const editForm = document.forms.editForm;
const editName = editForm.elements.name;
const editInfo = editForm.elements.info;




const popup = new PopupCard(document.querySelector('.popup'), infoButton);
const popupImage = new Popup(document.querySelector('.popup'));
const popupEdit = new PopupEdit(editPopup, editButton);
const cardList = new CardList(document.querySelector('.places-list'),initialCards);

api.getInitialCards().then((result) => {
      for(let i = 0; i<result.length; i++){
        initialCards.push({
          'name': result[i]['name'],
          'link': result[i]['link']
        })
      }

new CardList(placesList, initialCards)
})

api.dataLoading().then((result) => {
  userName.textContent = result.name;
  userJob.textContent = result.about;
  editName.value = userName.textContent; //загрузка имени с сервера
  editInfo.value = userJob.textContent; //загрузка информации с сервера
  avatar.style.backgroundImage = `url(${result.avatar})`; //загрузка аватара с сервера 

  })

const popupForm = document.querySelector('.popup__form');

popupForm.addEventListener('input', function() {
  

    if (name.value.length !== 0 && link.value.length !== 0){
    addCardButton.classList.add('popup__button_active');

    } 
    else {
      addCardButton.classList.remove('popup__button_active');

}
  

  form.addEventListener('submit', function(event){

  event.preventDefault();

  if (name.value.length === 0 || link.value.length === 0){
    addCardButton.setAttribute('disabled', true);

  } else {

    cardList.addCard(form.elements.name.value,form.elements.link.value);
    popup.close();

  }
  addCardButton.removeAttribute('disabled');
  addCardButton.classList.remove('popup__button_active');

});
});


