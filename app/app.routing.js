"use strict";
var router_1 = require('@angular/router');
var admin_1 = require('./admin/admin');
var content_1 = require("./frontend/content/content");
var content_tweets_1 = require("./frontend/content/content-tweets");
var appRoutes = [
    { path: '', component: content_1.Content },
    { path: 'tweets', component: content_tweets_1.ContentTweets },
    { path: 'admin', component: admin_1.Admin }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map