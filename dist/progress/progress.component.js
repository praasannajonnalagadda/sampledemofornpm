var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var ProgressComponent = (function () {
    function ProgressComponent() {
        this.title = 'Progress bar';
    }
    ProgressComponent = __decorate([
        Component({
            selector: 'progress-bar',
            template: "\n    <h1>\n      {{title}}\n    </h1>\n    <div class=\"progress\">\n      <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\"\n      aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\">\n        40% Complete (success)\n      </div>\n    </div>\n  ",
            styles: ["\n\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressComponent);
    return ProgressComponent;
}());

//# sourceMappingURL=progress.component.js.map