"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iota_1 = require("../controllers/iota");
function IOTARouter(app) {
    app.get('/api/iota/node', iota_1.getNodeInfo);
    app.get('/api/iota/seed', iota_1.getASeed);
    app.get('/api/iota/addresses', iota_1.getAddresses);
    app.get('/api/iota/balance/:address', iota_1.getBalanceAddress);
}
exports.default = IOTARouter;
//# sourceMappingURL=iota.js.map