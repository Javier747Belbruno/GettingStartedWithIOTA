"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUser = exports.createUser = void 0;
const user_1 = require("../services/user");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.params);
        return res.send(req.params);
    });
}
exports.createUser = createUser;
function searchUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield (0, user_1.getUserById)(Number(id));
            return res.json(user);
        }
        catch (err) {
            return res.status(500).json({ error: err });
        }
    });
}
exports.searchUser = searchUser;
//# sourceMappingURL=user.js.map