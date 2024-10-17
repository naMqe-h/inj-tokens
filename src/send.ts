import { MsgBroadcasterWithPk, MsgSend } from '@injectivelabs/sdk-ts'
import { Network } from '@injectivelabs/networks';

const wallets = [
    {
        publicKey: "",
        privateKey: "",
    }
]

const ONE_INJ = "1000000000000000000"
const AMOUNT = 1

const send = async (publicKey: string, privateKey: string) => {
    try {
        const txHash = await new MsgBroadcasterWithPk({ privateKey: privateKey, network: Network.MainnetSentry }).broadcast({
            msgs: MsgSend.fromJSON({
                amount: {
                    amount: (+ONE_INJ * AMOUNT).toString(),
                    denom: 'inj',
                },
                dstInjectiveAddress: "",
                srcInjectiveAddress: publicKey,
            }),
        });
        console.log(txHash);
    } catch (e) {
        console.log(e)
    }
}

const main = async () => {
    for (let i = 0; i < wallets.length; i++) {
        await send(wallets[i].publicKey, wallets[i].privateKey)
    }
}

main()