"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
function userRouter(app) {
    app.post('/api/users/:id/name/:name', user_1.createUser);
    app.get('/api/users/:id', user_1.searchUser);
}
exports.default = userRouter;
//# sourceMappingURL=user.js.map