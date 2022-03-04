import { findById } from '../models/user';

// create an async function to get user by id
async function getUserById(id: number) {
    return findById(id);
}


export { getUserById };