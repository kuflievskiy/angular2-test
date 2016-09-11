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
var Favorite = (function () {
    function Favorite(elementRef) {
        this.isFavorite = false;
        this.change = new core_1.EventEmitter();
        this.elementRef = elementRef;
    }
    Favorite.prototype.onClick = function ($event) {
        this.isFavorite = ((true == this.isFavorite) ? false : true);
        this.renderStar($event.target);
        this.change.emit({ newValue: this.isFavorite });
    };
    Favorite.prototype.renderStar = function (myElement) {
        if (this.isFavorite) {
            myElement.innerHTML = '&#x2605;'; // BLACK STAR
        }
        else {
            myElement.innerHTML = '&#x2606;'; // WHITE STAR
        }
    };
    Favorite.prototype.ngOnInit = function () {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
        this.renderStar(this.elementRef.nativeElement.children[0]);
    };
    __decorate([
        core_1.Input('is-favorite'), 
        __metadata('design:type', Boolean)
    ], Favorite.prototype, "isFavorite", void 0);
    __decorate([
        core_1.Output('change'), 
        __metadata('design:type', Object)
    ], Favorite.prototype, "change", void 0);
    Favorite = __decorate([
        core_1.Component({
            selector: 'favorite',
            template: '<span class="glyphicons" (click)="onClick($event)" [class.glyphicon-star-empty] = "!isFavorite" [class.glyphicon-star] = "isFavorite"></span>',
            styles: [
                ".glyphicon-star-empty, .glyphicon-star{\n            font-size:25px;\n        }\n        .glyphicon-star-empty:hover, .glyphicon-star:hover{\n            cursor: hand;\n        }"
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Favorite);
    return Favorite;
}());
exports.Favorite = Favorite;
//# sourceMappingURL=favorite.js.map