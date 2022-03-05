import { Express } from 'express';
import { createUser, searchUser } from '../controllers/user';


export default function userRouter(app: Express) {
    app.post('/api/users/:id/name/:name', createUser);
    app.get('/api/users/:id', searchUser);
}

