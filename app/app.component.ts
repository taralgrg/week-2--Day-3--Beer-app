import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
 selector: 'my-app',
 template: `
<div class="container">
  <keg-list
    [childKegList]="masterKegList"
    (submit)="showDetails($event)">
  </keg-list>
  <edit-keg
    [childSelectedKeg]="selectedKeg"
    (doneClickedSender)="finishedEditing()"
  ></edit-keg>
  <new-keg
   (newKegSender)="addTask($event)">
  </new-keg>
</div>
 `
})

export class AppComponent {
  public masterKegList: Keg[] = [
  new Keg("Mexico","Corona",40,10,6),
  new Keg("Japan","Asahi",40,11,5),
  new Keg("Germany","Carlsberg",40,9,4),
  ];

  selectedKeg = null;
  showDetails(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
  addTask(newTaskFromKeg: Keg) {
  this.masterKegList.push(newTaskFromKeg);
  }

}
