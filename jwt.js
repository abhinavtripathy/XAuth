let jwt = require('jsonwebtoken');
let token = jwt.sign({ foo: 'bar' }, 'shhhhh');

let decoded = jwt.decode(token);