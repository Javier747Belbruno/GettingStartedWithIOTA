

export async function getNodeInfoService() {
    let data = "";
    const { ClientBuilder } = require('@iota/client');

    try {
        const client = new ClientBuilder()
            .node('https://api.lb-0.h.chrysalis-devnet.iota.cafe:443')
            .localPow(true)
            .build();

        data = client.getInfo();
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export async function getASeedService() {
    const crypto = require('crypto');

    try {
        const seed = crypto.createHash('sha256').update(crypto.randomBytes(256)).digest('hex');
        return seed;
    } catch (err) {
        console.log(err);
        return err;
    }

}

export async function generateAddressesService() {
    try {
        const { ClientBuilder } = require('@iota/client');

        // Get the seed from environment variable
        const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;

        // client will connect to testnet by default
        const client = new ClientBuilder().build();

        const addresses = await client.getAddresses(IOTA_SEED_SECRET)
            .accountIndex(0)
            .range(0, 5)
            .get();

        return addresses;
    } catch (err) {
        console.log(err);
        return err;
    }

}


export async function getBalanceAddressService(address: string) {
    try {
        const { ClientBuilder } = require('@iota/client');

        // Get the seed from environment variable
        const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;

        // client will connect to testnet by default
        const client = new ClientBuilder().build();

        // Get the balance of addresses from an account
        const balance = await client.getAddressBalance(address);
        return balance;
    } catch (err) {
        console.log(err);
        return err;
    }

}



