"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var keg_model_1 = require('./keg.model');
var EditKegComponent = (function () {
    function EditKegComponent() {
        this.doneClickedSender = new core_1.EventEmitter();
    }
    EditKegComponent.prototype.doneClicked = function () {
        this.doneClickedSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', keg_model_1.Keg)
    ], EditKegComponent.prototype, "childSelectedKeg", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditKegComponent.prototype, "doneClickedSender", void 0);
    EditKegComponent = __decorate([
        core_1.Component({
            selector: 'edit-keg',
            template: "\n  <div *ngIf=\"childSelectedKeg\">\n  <h1>Edit Task</h1>\n     <div>\n       <label>Enter Name:</label>\n       <input [(ngModel)]=\"childSelectedKeg.name\">\n     </div>\n     <div>\n       <label>Enter Brand:</label>\n       <input [(ngModel)]=\"childSelectedKeg.brand\">\n     </div>\n     <div>\n       <label>Enter the no. of Pints:</label>\n       <input [(ngModel)]=\"childSelectedKeg.pintcount\">\n     </div>\n      <div>\n        <label>Enter Price:</label>\n        <input [(ngModel)]=\"childSelectedKeg.price\">\n      </div>\n      <div>\n        <label>Enter Alcohol Content:</label>\n        <input [(ngModel)]=\"childSelectedKeg.alcoholcontent\">\n\n        <button (click)=\"doneClicked()\">Done</button>\n      </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditKegComponent);
    return EditKegComponent;
}());
exports.EditKegComponent = EditKegComponent;
//# sourceMappingURL=edit-keg.component.js.map