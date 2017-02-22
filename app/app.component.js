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
var AppComponent = (function () {
    function AppComponent() {
        this.masterKegList = [
            new keg_model_1.Keg("Mexico", "Corona", 40, 10, 6),
            new keg_model_1.Keg("Japan", "Asahi", 40, 11, 5),
            new keg_model_1.Keg("Germany", "Carlsberg", 40, 9, 4),
        ];
        this.selectedKeg = null;
    }
    AppComponent.prototype.showDetails = function (clickedKeg) {
        this.selectedKeg = clickedKeg;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedKeg = null;
    };
    AppComponent.prototype.addTask = function (newTaskFromKeg) {
        this.masterKegList.push(newTaskFromKeg);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<div class=\"container\">\n  <keg-list\n    [childKegList]=\"masterKegList\"\n    (submit)=\"showDetails($event)\">\n  </keg-list>\n  <edit-keg\n    [childSelectedKeg]=\"selectedKeg\"\n    (doneClickedSender)=\"finishedEditing()\"\n  ></edit-keg>\n  <new-keg\n   (newKegSender)=\"addTask($event)\">\n  </new-keg>\n</div>\n "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map