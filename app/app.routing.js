"use strict";
var router_1 = require('@angular/router');
var list_component_1 = require('./components/list.component');
var appRoutes = [
    {
        path: 'lists',
        component: list_component_1.ListComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map