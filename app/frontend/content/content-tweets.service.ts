import {Injectable} from '@angular/core';

@Injectable()
export class ContentTweetsService {
    getItems(): any[] {
        return [
            {
                "id":1,
                "name":"Twiter name1",
                "nickname":"@kuflievskiy",
                "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "imageUrl":"https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "isLiked" : false,
                "numberOfLikes" : 2
            },
            {
                "id":1,
                "name":"Twiter name2",
                "nickname":"@kuflievskiy",
                "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "imageUrl":"https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "isLiked" : false,
                "numberOfLikes" : 3
            },
            {
                "id":1,
                "name":"Twiter name3",
                "nickname":"@kuflievskiy",
                "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "imageUrl":"https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "isLiked" : false,
                "numberOfLikes" : 2
            },
            {
                "id":1,
                "name":"Twiter name4",
                "nickname":"@kuflievskiy",
                "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "imageUrl":"https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "isLiked" : false,
                "numberOfLikes" : 5
            },
            {
                "id":1,
                "name":"Twiter name5",
                "nickname":"@kuflievskiy",
                "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "imageUrl":"https://yellowpencil.com/assets/blog/banners/banner-angularjs.jpg",
                "isLiked" : false,
                "numberOfLikes" : 10
            },
        ];
    };
}