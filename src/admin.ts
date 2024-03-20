import { MsgBroadcasterWithPk, MsgChangeAdmin } from '@injectivelabs/sdk-ts'
import { Network } from '@injectivelabs/networks';

const injectiveAddress = '';
const privateKey = '';

const subdenom = '';
const denom = `factory/${injectiveAddress}/${subdenom}`;

const main = async () => {
    const txHash = await new MsgBroadcasterWithPk({ privateKey, network: Network.MainnetSentry }).broadcast({
        msgs: MsgChangeAdmin.fromJSON({
            denom,
            newAdmin: 'inj1mf54qzss29pyk450lkdpa2rqpn38hzcexfpyac',
            sender: injectiveAddress
        }),
    });
    
    console.log(txHash);
}

main()