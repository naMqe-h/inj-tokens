import { MsgBroadcasterWithPk, MsgSend } from '@injectivelabs/sdk-ts'
import { Network } from '@injectivelabs/networks';
import { BigNumberInBase } from '@injectivelabs/utils';

const injectiveAddress = ''
const privateKey = '';

const main = async () => {
    const txHash = await new MsgBroadcasterWithPk({ privateKey, network: Network.MainnetSentry }).broadcast({
        msgs: MsgSend.fromJSON({
            amount: {
                amount: new BigNumberInBase(0).toFixed(),
                denom: '',
            },
            dstInjectiveAddress: "",
            srcInjectiveAddress: injectiveAddress,
        }),
    });
    
    console.log(txHash);
}

main()