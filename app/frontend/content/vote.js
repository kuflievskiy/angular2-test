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
var Vote = (function () {
    function Vote() {
        this.vote = new core_1.EventEmitter();
    }
    Vote.prototype.onClick = function ($event, direction) {
        if ('up' == direction) {
            if (this.myVote <= 0) {
                this.myVote = 1;
            }
        }
        else if ('down' == direction) {
            if (this.myVote >= 0) {
                this.myVote = -1;
            }
        }
        this.vote.emit({ 'myVote': this.myVote });
    };
    __decorate([
        core_1.Input('vote-count'), 
        __metadata('design:type', Number)
    ], Vote.prototype, "voteCount", void 0);
    __decorate([
        core_1.Input('my-vote'), 
        __metadata('design:type', Number)
    ], Vote.prototype, "myVote", void 0);
    __decorate([
        core_1.Output('vote'), 
        __metadata('design:type', Object)
    ], Vote.prototype, "vote", void 0);
    Vote = __decorate([
        core_1.Component({
            selector: 'vote',
            template: "\n        <span class=\"vote-up\" [class.active]=\"myVote == 1\" (click)=\"onClick($event,'up')\">\u2B9D</span>\n        <span class=\"votes-count\">{{voteCount+myVote}}</span>\n        <span class=\"vote-down\" [class.active]=\"myVote == -1\" (click)=\"onClick($event,'down')\">\u2B9F</span>\n        ",
            styles: [
                "\n            .vote-up,.vote-down{\n                cursor:pointer;\n            }\n            .vote-up.active,.vote-down.active{\n                color:#000;\n            }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Vote);
    return Vote;
}());
exports.Vote = Vote;
//# sourceMappingURL=vote.js.map