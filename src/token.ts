import { MsgBroadcasterWithPk, MsgCreateDenom, MsgMint, MsgSetDenomMetadata, MsgBurn } from '@injectivelabs/sdk-ts';
import { Network } from '@injectivelabs/networks';

const injectiveAddress = '';
const privateKey = '';

const subdenom = '';
const denom = `factory/${injectiveAddress}/${subdenom}`;
const amount = '100_000_000_000_000';

const msgCreateDenom = MsgCreateDenom.fromJSON({
    subdenom,
    sender: injectiveAddress,
});

const msgMint = MsgMint.fromJSON({
    sender: injectiveAddress,
    amount: {
        denom: `factory/${injectiveAddress}/${subdenom}`,
        amount: amount,
    },
});

const msgBurn = MsgBurn.fromJSON({
    sender: injectiveAddress,
    amount: {
        denom: `factory/${injectiveAddress}/${subdenom}`,
        amount: '0',
    },
});

const msgSetDenomMetadata = MsgSetDenomMetadata.fromJSON({
    sender: injectiveAddress,
    metadata: {
        description: `$${subdenom}`,
        denomUnits: [
            {
                denom: `factory/${injectiveAddress}/${subdenom}`,
                exponent: 0,
                aliases: [],
            },
            {
            denom: subdenom,
            exponent: 6,
            aliases: [subdenom]
            },
        ],
        base: denom,
        display: subdenom,
        name: subdenom,
        symbol: subdenom,
        uri: '',
        uriHash: '',
    },
});

const main = async () => {
    const txHash = await new MsgBroadcasterWithPk({ privateKey, network: Network.MainnetSentry }).broadcast({
        msgs: [msgCreateDenom, msgMint, msgSetDenomMetadata],
    });
    
    console.log(txHash);
}

main()