import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>Add new</h1>
    <div>
      <label>Enter New Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter New Brand:</label>
      <input #newBrand>
    <div>
      <label>Enter the New Price:</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter New Alcohol Content:</label>
      <input #newAlcoholcontent>
    </div>
    <div>
     <button (click)="
        addNew(newName.value, newBrand.value, 40,
        newPrice.value, newAlcoholcontent.value);
        newPrice.value='';
        newBrand.value='';
        newPrice.value='';
        newAlcoholcontent.value='';
        ">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addNew(name: string,brand : string,
    pintcount: number, price: number, alcoholcontent: number) {
    var newKegToAdd: Keg = new Keg(name,brand,pintcount
      ,price,alcoholcontent);
    this.newKegSender.emit(newKegToAdd);
  }
}
