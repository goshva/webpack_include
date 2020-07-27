const fs = require('fs');
const path = require('path');
let injectionContent = '';

injectionContent = fs.readFileSync(
  path.resolve(__dirname, 'injection.js'),
  'utf8'
);

module.exports = injectionContent;
