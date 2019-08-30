const forge = require('node-forge');
let crypto = require('crypto-js')

function hashNodeForge(hashString) {

    let accessToken = forge.md.sha256.create();
    accessToken.update(hashString);
    return accessToken.digest().toHex();

}

function hash(hashString) {

    return crypto.SHA256(hashString).toString()

}

console.log(hashNodeForge('abhinav@gmail.com'));


