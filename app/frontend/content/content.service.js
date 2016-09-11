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
var ContentService = (function () {
    function ContentService() {
    }
    ContentService.prototype.getItems = function () {
        return [
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": true,
                "isLiked": false,
                "numberOfLikes": 1,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 2,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": true,
                "isLiked": false,
                "numberOfLikes": 2,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": true,
                "isLiked": false,
                "numberOfLikes": 3,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": true,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": true,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": true,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            },
            {
                "id": 1,
                "title": "Test Title",
                "imageUrl": "https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "isFavorite": false,
                "isLiked": false,
                "numberOfLikes": 10,
                "voteCount": 10,
                "myVote": 0
            }];
    };
    ;
    ContentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContentService);
    return ContentService;
}());
exports.ContentService = ContentService;
//# sourceMappingURL=content.service.js.map