"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const user_1 = __importDefault(require("./routes/user"));
const iota_1 = __importDefault(require("./routes/iota"));
// Check where this line goes in the other project.
//const dotenv = require("dotenv").config();
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// A dummy middleware to test 
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
// Routes
(0, user_1.default)(app);
(0, iota_1.default)(app);
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log('Application listening at Http://localhost:' + PORT);
});
//# sourceMappingURL=server.js.map