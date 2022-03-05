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
exports.getBalanceAddressService = exports.generateAddressesService = exports.getASeedService = exports.getNodeInfoService = void 0;
function getNodeInfoService() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = "";
        const { ClientBuilder } = require('@iota/client');
        try {
            const client = new ClientBuilder()
                .node('https://api.lb-0.h.chrysalis-devnet.iota.cafe:443')
                .localPow(true)
                .build();
            data = client.getInfo();
            return data;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    });
}
exports.getNodeInfoService = getNodeInfoService;
function getASeedService() {
    return __awaiter(this, void 0, void 0, function* () {
        const crypto = require('crypto');
        try {
            const seed = crypto.createHash('sha256').update(crypto.randomBytes(256)).digest('hex');
            return seed;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    });
}
exports.getASeedService = getASeedService;
function generateAddressesService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { ClientBuilder } = require('@iota/client');
            // Get the seed from environment variable
            const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;
            // client will connect to testnet by default
            const client = new ClientBuilder().build();
            const addresses = yield client.getAddresses(IOTA_SEED_SECRET)
                .accountIndex(0)
                .range(0, 5)
                .get();
            return addresses;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    });
}
exports.generateAddressesService = generateAddressesService;
function getBalanceAddressService(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { ClientBuilder } = require('@iota/client');
            // Get the seed from environment variable
            const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;
            // client will connect to testnet by default
            const client = new ClientBuilder().build();
            // Get the balance of addresses from an account
            const balance = yield client.getAddressBalance(address);
            return balance;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    });
}
exports.getBalanceAddressService = getBalanceAddressService;
//# sourceMappingURL=iota.js.map