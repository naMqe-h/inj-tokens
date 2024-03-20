import { PrivateKey } from '@injectivelabs/sdk-ts';

const mnemonic ='';
const privateKeyFromMnemonic = PrivateKey.fromMnemonic(mnemonic);

const address = privateKeyFromMnemonic.toAddress()

// console.log({
//   privateKey: privateKeyFromMnemonic,
//   injectiveAddress: address.toBech32(),
// });


console.log(privateKeyFromMnemonic.toPrivateKeyHex());
console.log(address);
