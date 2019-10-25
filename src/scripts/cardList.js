import {Card} from './card.js';


export class CardList{
  constructor(container, array){
    this.container = container;
    this.array = array;
    this.render();
  }
  //добавление картинки в конец массива
  addCard(name, link){
    const { cardElement } = new Card(name, link);
    this.array.push({name, link});
    this.container.appendChild(cardElement);
  }
    render(){
    this.array.forEach((el) => this.addCard(el.name, el.link)); 
  }

}