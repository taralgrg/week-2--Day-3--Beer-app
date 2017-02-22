import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
  <h1>Edit Task</h1>
     <div>
       <label>Enter Name:</label>
       <input [(ngModel)]="childSelectedKeg.name">
     </div>
     <div>
       <label>Enter Brand:</label>
       <input [(ngModel)]="childSelectedKeg.brand">
     </div>
     <div>
       <label>Enter the no. of Pints:</label>
       <input [(ngModel)]="childSelectedKeg.pintcount">
     </div>
      <div>
        <label>Enter Price:</label>
        <input [(ngModel)]="childSelectedKeg.price">
      </div>
      <div>
        <label>Enter Alcohol Content:</label>
        <input [(ngModel)]="childSelectedKeg.alcoholcontent">

        <button (click)="doneClicked()">Done</button>
      </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
