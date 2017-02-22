
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor="let currentKeg of childKegList">
      <h3>Name: {{ currentKeg.name }}</h3>
      <h3>Brand: {{ currentKeg.brand }}</h3>
      <h3>No.of Pint left: {{ currentKeg.pintcount }}</h3>
      <h3>Price: {{ currentKeg.price }}</h3>
      <h3>Alcohol Content: {{ currentKeg.alcoholcontent }}%</h3>
      <div *ngIf='currentKeg.pintcount <= 10'>
          <h3>Refill the damn Keg!!!</h3>
      </div>
      <button (click)="edit(currentKeg)">Edit</button>
      <button (click)="sell(currentKeg)">Sell 1 pint</button>
    </div>
  `
})

export class KegListComponent {
  @Input()childKegList: Keg[];
  @Output()submit = new EventEmitter();
  edit(editedKeg: Keg) {
    this.submit.emit(editedKeg);
  }
  sell(currentKeg){
    currentKeg.pintcount=currentKeg.pintcount-1
  }
}
