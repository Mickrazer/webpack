import {api} from './api.js';
import {Popup} from './popup.js';


export class PopupEdit extends Popup{
  constructor(popupElement, button){
    super(popupElement);
    this.button = button;
    this.change();
    this.button.addEventListener('click', this.open);
    this.editClose = document.getElementById('editClose');
    this.editClose.addEventListener('click', this.close);
  }
  change(){
    this.popupElement.addEventListener('submit', function(event){
    event.preventDefault();

      if (editName.value.length !== 0 && editInfo.value.length !== 0) {
        userName.textContent = editName.value;
        userJob.textContent =  editInfo.value;

        api.profileEditSave().then(result => console.log(result));

        editPopup.classList.remove('popup_is-opened');
        changeProfileButton.removeAttribute('disabled');
      }
      else {
        changeProfileButton.setAttribute('disabled', true);
      }

    });
  }

  close(){  
    this.popupElement.classList.remove('popup_is-opened');
    editName.value = userName.textContent;
    editInfo.value = userJob.textContent;
    resetError(editName);
    resetError(editInfo);
    changeProfileButton.removeAttribute('disabled');
    changeProfileButton.classList.add('popup__button_active');   
    
  }
}


const editForm = document.forms.editForm;
const editName = editForm.elements.name;
const editInfo = editForm.elements.info;
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job'); 
editName.value = userName.textContent;
editInfo.value = userJob.textContent;


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

editName.addEventListener('input', handleValidate);
editInfo.addEventListener('input', handleValidate);



function handleValidate(event) {
  resetError(event.target);
  validate(event.target);
}

changeProfileButton.classList.add('popup__button_active');


function validate(element) {

  const errorName = document.querySelector('#error-name');
  const errorInfo = document.querySelector('#error-info');

  /* Можно лучше: код проверок дублируется для обоих полей. Лучше постараться вынести код проверки
  в отдельную функцию */
  if (editName.value.length === 0) {
    errorName.textContent = 'Это обязательное поле!';
    errorName.parentNode.classList.add('input-container__invalid');
    changeProfileButton.classList.remove('popup__button_active');
    changeProfileButton.setAttribute('disabled', true);

  } else if (editName.value.length < 2  || editName.value.length > 30) {
    errorName.textContent = 'Должно быть от 2 до 30 символов!';
    errorName.parentNode.classList.add('input-container__invalid');
    changeProfileButton.classList.remove('popup__button_active');
    changeProfileButton.setAttribute('disabled', true);

  } else {
    errorName.textContent = '';
    changeProfileButton.classList.add('popup__button_active');
    changeProfileButton.removeAttribute('disabled');
  }

  if (editInfo.value.length === 0) {
    errorInfo.textContent = 'Это обязательное поле!';
    errorInfo.parentNode.classList.add('input-container__invalid');
    changeProfileButton.classList.remove('popup__button_active');
    changeProfileButton.setAttribute('disabled', true);

  } else if (editInfo.value.length < 2  || editInfo.value.length > 30) {
    errorInfo.textContent = 'Должно быть от 2 до 30 символов!';
    errorInfo.parentNode.classList.add('input-container__invalid');
    changeProfileButton.classList.remove('popup__button_active');
    changeProfileButton.setAttribute('disabled', true);

  } else {
    errorInfo.textContent = '';

  }
}


function resetError(element) {
  element.parentNode.classList.remove('input-container__invalid');
  element.textContent = '';
}