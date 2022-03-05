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
exports.getBalanceAddress = exports.getAddresses = exports.getASeed = exports.getNodeInfo = void 0;
const iota_1 = require("../services/iota");
function getNodeInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const nodeInfo = yield (0, iota_1.getNodeInfoService)();
            return res.json(nodeInfo);
        }
        catch (err) {
            return res.status(500).json({ error: err });
        }
    });
}
exports.getNodeInfo = getNodeInfo;
function getASeed(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const seed = yield (0, iota_1.getASeedService)();
            return res.json(seed);
        }
        catch (err) {
            return res.status(500).json({ error: err });
        }
    });
}
exports.getASeed = getASeed;
function getAddresses(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const addresses = yield (0, iota_1.generateAddressesService)();
            return res.json(addresses);
        }
        catch (err) {
            return res.status(500).json({ error: err });
        }
    });
}
exports.getAddresses = getAddresses;
function getBalanceAddress(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // get the address from the request
        const address = req.params.address;
        try {
            const balance = yield (0, iota_1.getBalanceAddressService)(address);
            return res.json(balance);
        }
        catch (err) {
            return res.status(500).json({ error: err });
        }
    });
}
exports.getBalanceAddress = getBalanceAddress;
//# sourceMappingURL=iota.js.map