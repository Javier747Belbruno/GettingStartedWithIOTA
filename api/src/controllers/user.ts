import { Request, Response } from "express";

import { getUserById } from "../services/user";

export async function createUser(req: Request, res: Response) {
    console.log(req.params);
    return res.send(req.params);
}

export async function searchUser(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const user = await getUserById(Number(id));

        return res.json(user);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}
