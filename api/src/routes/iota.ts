import { Express } from 'express';
import { getNodeInfo, getASeed, getAddresses, getBalanceAddress } from '../controllers/iota';


export default function IOTARouter(app: Express) {
    app.get('/api/iota/node', getNodeInfo);
    app.get('/api/iota/seed', getASeed);
    app.get('/api/iota/addresses', getAddresses);
    app.get('/api/iota/balance/:address', getBalanceAddress);
}
