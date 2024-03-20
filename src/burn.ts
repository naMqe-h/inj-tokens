import { MsgBroadcasterWithPk, MsgExecuteContract } from '@injectivelabs/sdk-ts'
import { Network } from '@injectivelabs/networks';

const injectiveAddress = '';
const privateKey = '';

const main = async () => {
    const txHash = await new MsgBroadcasterWithPk({ privateKey, network: Network.MainnetSentry }).broadcast({
        msgs: MsgExecuteContract.fromJSON({
            contractAddress: "",
            sender: injectiveAddress,
            msg: {
                transfer: {
                    recipient: '',
                    amount: ''
                }
            }
        }),
    });

    
    console.log(txHash);
}

main()