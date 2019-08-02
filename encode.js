const forge = require('node-forge');


function hash(hashString) {

    let accessToken = forge.md.sha256.create();
    accessToken.update(hashString);
    return accessToken.digest().toHex();

}

console.log(hash('abhinav@gmail.com'));
