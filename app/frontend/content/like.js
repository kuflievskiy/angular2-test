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
var Like = (function () {
    function Like(elementRef) {
        this.elementRef = elementRef;
        this.isLiked = false;
        this.change = new core_1.EventEmitter();
    }
    Like.prototype.onClick = function ($event) {
        this.isLiked = !this.isLiked;
        this.numberOfLikes += this.isLiked ? 1 : -1;
        this.renderEl($event.target);
        this.change.emit({ 'isLiked': this.isLiked, 'numberOfLikes': this.numberOfLikes });
    };
    Like.prototype.renderEl = function (myElement) {
        if (this.isLiked) {
            myElement.innerHTML = '&#9829;';
        }
        else {
            myElement.innerHTML = '&#9825;';
        }
    };
    Like.prototype.ngOnInit = function () {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
        this.renderEl(this.elementRef.nativeElement.children[0]);
    };
    __decorate([
        core_1.Input('is-liked'), 
        __metadata('design:type', Boolean)
    ], Like.prototype, "isLiked", void 0);
    __decorate([
        core_1.Input('number-of-likes'), 
        __metadata('design:type', Number)
    ], Like.prototype, "numberOfLikes", void 0);
    __decorate([
        core_1.Output('change'), 
        __metadata('design:type', Object)
    ], Like.prototype, "change", void 0);
    Like = __decorate([
        core_1.Component({
            selector: 'like',
            template: '<span class="glyphicons glyphicon-heart" (click)="onClick($event)" [class.active]="isLiked"></span>{{numberOfLikes}}',
            styles: [
                "\n        .glyphicon-heart{ color:#ccc; }\n        .glyphicon-heart.active{ color:deeppink; }\n        .glyphicon-heart:hover{\n            cursor:pointer;\n        }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Like);
    return Like;
}());
exports.Like = Like;
//# sourceMappingURL=like.js.map