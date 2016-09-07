"use strict";
var router_1 = require('@angular/router');
var admin_1 = require('./admin/admin');
var frontend_1 = require("./frontend/frontend");
var appRoutes = [
    { path: '', component: frontend_1.Frontend },
    { path: 'admin', component: admin_1.Admin }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map