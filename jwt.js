let jwt = require('jsonwebtoken');
let token = jwt.sign({ foo: 'bar' }, 'shhhhh');

console.log(token)

let decoded = jwt.decode(token);

console.log(decoded)