"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = void 0;
// create class user
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
// create a file and save with users
function findById(id) {
    return new Promise((resolve, reject) => {
        if (id === 1) {
            resolve(new User(1, 'John'));
        }
        else {
            reject('User not found');
        }
    });
}
exports.findById = findById;
//# sourceMappingURL=user.js.map