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
var KegListComponent = (function () {
    function KegListComponent() {
        this.submit = new core_1.EventEmitter();
    }
    KegListComponent.prototype.edit = function (editedKeg) {
        this.submit.emit(editedKeg);
    };
    KegListComponent.prototype.sell = function (currentKeg) {
        currentKeg.pintcount = currentKeg.pintcount - 1;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], KegListComponent.prototype, "childKegList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], KegListComponent.prototype, "submit", void 0);
    KegListComponent = __decorate([
        core_1.Component({
            selector: 'keg-list',
            template: "\n    <div *ngFor=\"let currentKeg of childKegList\">\n      <h3>Name: {{ currentKeg.name }}</h3>\n      <h3>Brand: {{ currentKeg.brand }}</h3>\n      <h3>No.of Pint left: {{ currentKeg.pintcount }}</h3>\n      <h3>Price: {{ currentKeg.price }}</h3>\n      <h3>Alcohol Content: {{ currentKeg.alcoholcontent }}%</h3>\n      <div *ngIf='currentKeg.pintcount <= 10'>\n          <h3>Refill the damn Keg!!!</h3>\n      </div>\n      <button (click)=\"edit(currentKeg)\">Edit</button>\n      <button (click)=\"sell(currentKeg)\">Sell 1 pint</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], KegListComponent);
    return KegListComponent;
}());
exports.KegListComponent = KegListComponent;
//# sourceMappingURL=keg-list.component.js.map