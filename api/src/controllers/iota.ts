import { Request, Response } from "express";

import {
    getNodeInfoService, getASeedService, generateAddressesService, getBalanceAddressService
} from "../services/iota";


export async function getNodeInfo(req: Request, res: Response) {
    try {
        const nodeInfo = await getNodeInfoService();
        return res.json(nodeInfo);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

export async function getASeed(req: Request, res: Response) {
    try {
        const seed = await getASeedService();
        return res.json(seed);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}


export async function getAddresses(req: Request, res: Response) {
    try {
        const addresses = await generateAddressesService();
        return res.json(addresses);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

export async function getBalanceAddress(req: Request, res: Response) {
    // get the address from the request
    const address = req.params.address;
    try {
        const balance = await getBalanceAddressService(address);
        return res.json(balance);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}
