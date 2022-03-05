// create class user
class User {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
// create a file and save with users
export function findById(id: number) {
    return new Promise((resolve, reject) => {
        if (id === 1) {
            resolve(new User(1, 'John'));
        } else {
            reject('User not found');
        }
    });
}

