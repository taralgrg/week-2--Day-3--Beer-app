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
var core_1 = require("@angular/core");
var keg_model_1 = require("./keg.model");
var NewKegComponent = (function () {
    function NewKegComponent() {
        this.newKegSender = new core_1.EventEmitter();
    }
    NewKegComponent.prototype.addNew = function (name, brand, pintcount, price, alcoholcontent) {
        var newKegToAdd = new keg_model_1.Keg(name, brand, pintcount, price, alcoholcontent);
        this.newKegSender.emit(newKegToAdd);
    };
    return NewKegComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewKegComponent.prototype, "newKegSender", void 0);
NewKegComponent = __decorate([
    core_1.Component({
        selector: 'new-keg',
        template: "\n    <h1>Add new</h1>\n    <div>\n      <label>Enter New Name:</label>\n      <input #newName>\n    </div>\n    <div>\n      <label>Enter New Brand:</label>\n      <input #newBrand>\n    <div>\n      <label>Enter the New Price:</label>\n      <input #newPrice>\n    </div>\n    <div>\n      <label>Enter New Alcohol Content:</label>\n      <input #newAlcoholcontent>\n    </div>\n    <div>\n     <button (click)=\"\n        addNew(newName.value, newBrand.value, 40,\n        newPrice.value, newAlcoholcontent.value);\n        newPrice.value='';\n        newBrand.value='';\n        newPrice.value='';\n        newAlcoholcontent.value='';\n        \">Add</button>\n    </div>\n  "
    })
], NewKegComponent);
exports.NewKegComponent = NewKegComponent;
//# sourceMappingURL=new-keg.component.js.map